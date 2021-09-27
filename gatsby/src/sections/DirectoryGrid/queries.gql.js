import { graphql } from 'gatsby';

export const Queries = graphql`
  fragment DirectoryGridData on SanityDirectoryGrid {
    _key
    _type
    heading
  }
  fragment GlobalBenefitsData on Query {
    benefits: allSanityBenefit {
      edges {
        node {
          id
          title
          slug {
            current
          }
        }
      }
    }
  }
`;
