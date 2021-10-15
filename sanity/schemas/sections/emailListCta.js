export default {
  name: "emailListCta",
  title: "Email List CTA",
  type: "object",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "subheadings",
      title: "Subheadings",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "showForm",
      title: "Email List CTA",
      type: "boolean",
      description: "Toggle to render an email list CTA inside this section.",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: "Email List CTA",
      };
    },
  },
};
