export default {
  name: "directoryGrid",
  title: "Directory Grid",
  type: "object",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: "Directory Grid",
      };
    },
  },
};
