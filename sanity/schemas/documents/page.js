import { BsPuzzleFill } from "react-icons/bs";
export default {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "seoTitle",
      title: "SEO Title",
      type: "string"
    },
    {
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      description: "Passed to page's JSONLD markup."
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
      name: "isDirectory",
      title: "This page displays the full company list.",
      type: "boolean",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
      description: "Slug MUST be set to render page on front-end.",
      validation: Rule => Rule.required(),
    },
    {
      name: "sections",
      title: "Sections",
      type: "array",
      description: "Page Builder",
      of: [
        { type: "introSection", icon: BsPuzzleFill },
        { type: "portableText", icon: BsPuzzleFill },
        { type: "emailListCta", icon: BsPuzzleFill },
        { type: "directoryGrid", icon: BsPuzzleFill },
        { type: "featuredTeams", icon: BsPuzzleFill },
        { type: "benefitList", icon: BsPuzzleFill },
        { type: "contactForm", icon: BsPuzzleFill },
      ],
    },
  ],
};
