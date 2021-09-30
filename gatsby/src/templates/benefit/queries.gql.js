import { graphql } from 'gatsby';

export const Queries = graphql`
  fragment BenefitData on Query {
    sanityBenefit(id: { eq: $id }) {
      title
      benefitEmoji
      seoDescription
      seoKeywords
      slug {
        current
      }
      companies {
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
`;
