async function createNewPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityPage(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
      allSanityCompany(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
      allSanityBenefit(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const pageEdges = (result.data.allSanityPage || {}).edges || [];
  const companyEdges = (result.data.allSanityCompany || {}).edges || [];
  const benefitEdges = (result.data.allSanityBenefit || {}).edges || [];

  pageEdges.forEach((edge) => {
    const { id, slug = {} } = edge.node;
    // The page with slug 'home' is set to homepage
    const path = slug.current === 'home' ? '/' : `/${slug.current}/`;

    createPage({
      path,
      component: require.resolve('./src/templates/page.jsx'),
      context: { id },
    });
  });

  companyEdges.forEach((edge) => {
    const { id, slug = {} } = edge.node;
    // The page with slug 'home' is set to homepage
    const path = `/directory/${slug.current}/`;

    createPage({
      path,
      component: require.resolve('./src/templates/company/index.jsx'),
      context: { id },
    });
  });

  benefitEdges.forEach((edge) => {
    const { id, slug = {} } = edge.node;
    // The page with slug 'home' is set to homepage
    const path = `/${slug.current}/`;

    createPage({
      path,
      component: require.resolve('./src/templates/benefit/index.jsx'),
      context: { id },
    });
  });
}

exports.createPages = async ({ graphql, actions }) => {
  await createNewPages(graphql, actions);
};

// Create resolver to fetch benefits associated with each company
exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    SanityBenefit: {
      companies: {
        type: ['SanityCompany'],
        resolve(source, args, context, info) {
          return context.nodeModel.runQuery({
            type: 'SanityCompany',
            query: {
              filter: {
                benefits: {
                  elemMatch: {
                    _id: {
                      eq: source._id,
                    },
                  },
                },
              },
            },
          });
        },
      },
    },
  };
  createResolvers(resolvers);
};
