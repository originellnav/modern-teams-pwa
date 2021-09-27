import { graphql } from 'gatsby';

export const Queries = graphql`
  fragment BenefitData on Query {
    sanityBenefit(id: { eq: $id }) {
      title
      seoDescription
      seoKeywords
      slug {
        current
      }
      companies {
        title
        excerpt
        logo {
          asset {
            url
            gatsbyImageData(layout: CONSTRAINED, width: 100, placeholder: NONE)
          }
        }
        slug {
          current
        }
      }
    }
  }
`;
