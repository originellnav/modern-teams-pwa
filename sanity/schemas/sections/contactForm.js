export default {
  name: "contactForm",
  title: "Contact Form",
  type: "object",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "subheading",
      title: "Subheading",
      type: "string",
    },
    {
      name: "fields",
      title: "Form Fields",
      type: "array",
      of: [{ type: "formField" }],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: "Contact Form",
      };
    },
  },
};
