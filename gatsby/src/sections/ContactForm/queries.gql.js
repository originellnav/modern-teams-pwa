import { graphql } from 'gatsby';

export const Queries = graphql`
  fragment ContactFormData on SanityContactForm {
    _key
    _type
    heading
    subheading
    fields {
      type
      options
      name
      placeholder
      validation
      validationMessage
    }
  }
`;
