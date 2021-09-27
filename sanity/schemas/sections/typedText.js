export default {
  name: "typedText",
  title: "Typed Text",
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
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: "Typed Text",
      };
    },
  },
};
