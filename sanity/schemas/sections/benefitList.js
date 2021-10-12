export default {
  name: "benefitList",
  title: "Benefit List",
  type: "object",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
      description: "Specify the heading here, the benefits will automatically be listed beneath it.",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: "Benefit List",
      };
    },
  },
};
