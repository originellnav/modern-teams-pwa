import { graphql } from 'gatsby';

export const Queries = graphql`
  fragment GlobalBenefitsData on Query {
    benefits: allSanityBenefit {
      edges {
        node {
          id
          title
          benefitEmoji
          slug {
            current
          }
        }
      }
    }
    pages: allSanityPage {
      edges {
        node {
          id
          title
          isDirectory
          slug {
            current
          }
        }
      }
    }
  }
`;
