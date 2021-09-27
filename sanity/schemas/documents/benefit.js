import { FcApproval } from "react-icons/fc";
export default {
  name: "benefit",
  title: "Company Benefit",
  type: "document",
  icon: FcApproval,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "benefitEmoji",
      title: "Emoji",
      type: "string",
      options: {
        list: [
          { title: "💬", value: "💬" },
          { title: "💻", value: "💻" },
          { title: "🌎", value: "🌎" },
          { title: "🗓️", value: "🗓️" },
          { title: "🤝", value: "🤝" },
          { title: "✈️ ", value: "✈️" },
          { title: "🦸‍♀️", value: "🦸‍♀️" },
          { title: "🕒", value: "🕒" },
          { title: "👨‍👩‍👦", value: "👨‍👩‍👦" },
          { title: "🏖️", value: "🏖️" },
          { title: "💰", value: "💰" },
        ],
      },
    },
    {
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      description: "Passed to page's JSONLD markup.",
    },
    {
      name: "seoKeywords",
      title: "SEO Keywords",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        layout: "tags",
      },
      description: "Passed to page's JSONLD markup.",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
      description: "Slug MUST be set to render page on front-end.",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "benefitEmoji",
    },
  },
};
