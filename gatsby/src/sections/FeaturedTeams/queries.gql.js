import { graphql } from 'gatsby';

export const Queries = graphql`
  fragment FeaturedTeamsData on SanityFeaturedTeams {
    _key
    _type
    heading
    teams {
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
    isBtn
    btnType
    linkText
    linkTo {
      slug {
        current
      }
    }
  }
`;
