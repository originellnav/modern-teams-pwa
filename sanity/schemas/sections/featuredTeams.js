export default {
  name: "featuredTeams",
  title: "Featured Teams",
  type: "object",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "teams",
      title: "Teams to Feature",
      type: "array",
      of: [{ type: "reference", to: [{ type: "company" }] }],
      validation: (Rule) => Rule.max(4),
    },
    {
      name: "linkText",
      title: "Link Text",
      type: "string",
    },
    {
      name: "isBtn",
      title: "Style as a button",
      type: "boolean",
    },
    {
      name: "btnType",
      title: "Button Type",
      type: "string",
      options: {
        list: [
          { title: "Primary", value: "primary" },
          { title: "Secondary", value: "secondary" },
          { title: "Tertiary", value: "tertiary" },
          { title: "Highlight", value: "highlight" },
          { title: "Success", value: "success" },
          { title: "Warning", value: "warning" },
          { title: "Error", value: "error" },
          { title: "White", value: "white" },
          { title: "Black", value: "black" },
        ],
      },
      hidden: ({ parent }) => !parent?.isBtn,
    },
    {
      name: "linkTo",
      title: "Link To",
      type: "reference",
      to: [{ type: "page" }],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: "Featured Teams",
      };
    },
  },
};
