export default {
  name: "companyWebsite",
  type: "object",
  title: "Company Website",
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
    },
  },
};
