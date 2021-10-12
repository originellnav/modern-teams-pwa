import { graphql } from 'gatsby';

export const Queries = graphql`
  fragment EmailListCtaData on SanityEmailListCta {
    _key
    _type
    heading
    subheading
  }
`;
