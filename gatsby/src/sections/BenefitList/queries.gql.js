import { graphql } from 'gatsby';

export const Queries = graphql`
  fragment BenefitListData on SanityBenefitList {
    _key
    _type
    heading
  }
`;
