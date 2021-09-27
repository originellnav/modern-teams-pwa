export default {
  name: "socialMedia",
  type: "object",
  title: "Social Media Link",
  fields: [
    {
      name: "icon",
      type: "image",
      title: "Icon",
    },
    {
      name: "text",
      type: "string",
      title: "Link Text",
    },
    {
      name: "url",
      type: "url",
      title: "URL",
    },
  ],
  preview: {
    select: {
      title: "text",
      subtitle: "url",
      media: "icon",
    },
  },
};
