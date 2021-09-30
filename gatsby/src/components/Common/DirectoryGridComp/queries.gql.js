import { graphql } from 'gatsby';

export const Queries = graphql`
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
