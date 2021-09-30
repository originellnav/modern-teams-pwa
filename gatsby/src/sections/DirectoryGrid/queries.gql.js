import { graphql } from 'gatsby';

export const Queries = graphql`
  fragment DirectoryGridData on SanityDirectoryGrid {
    _key
    _type
    heading
  }
  fragment GlobalCompaniesData on Query {
    companies: allSanityCompany {
      edges {
        node {
          id
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
  }
`;
