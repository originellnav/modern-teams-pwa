import { graphql } from 'gatsby';

export const Queries = graphql`
  fragment CompanyData on Query {
    sanityCompany(id: { eq: $id }) {
      title
      seoTitle
      seoDescription
      seoKeywords
      slug {
        current
      }
      logo {
        asset {
          url
          gatsbyImageData(layout: CONSTRAINED, width: 150, placeholder: NONE)
        }
      }
      excerpt
      companyLinks {
        ... on SanityCompanyWebsite {
          _key
          _type
          text
          url
          icon {
            asset {
              url
              gatsbyImageData(layout: CONSTRAINED, width: 15, placeholder: NONE)
            }
          }
        }
        ... on SanitySocialMedia {
          _key
          _type
          text
          url
          icon {
            asset {
              url
              gatsbyImageData(layout: CONSTRAINED, width: 15, placeholder: NONE)
            }
          }
        }
      }
      description: _rawDescription
      valuesHeading
      values: _rawValues
      perksHeading
      perks: _rawPerks
      benefits {
        id
        title
        benefitEmoji
      }
    }
  }
`;
