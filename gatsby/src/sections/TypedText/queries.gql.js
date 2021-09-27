import { graphql } from 'gatsby';

export const Queries = graphql`
  fragment TypedTextData on SanityTypedText {
    _key
    _type
    heading
    subheadings
  }
`;
