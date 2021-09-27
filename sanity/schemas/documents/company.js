export default {
  name: "company",
  title: "Company",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "benefits",
      title: "Benefits",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "benefit" }],
        },
      ],
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
    {
      name: "logo",
      title: "Logo",
      type: "mainImage",
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "string",
      description:
        "The excerpt is displayed on each company's card in the directory.",
    },
    {
      name: "companyLinks",
      title: "Company Links",
      type: "array",
      of: [
        {
          type: "companyWebsite",
        },
        {
          type: "socialMedia",
        },
      ],
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
    {
      name: "valuesHeading",
      title: "Values Section Heading",
      type: "string",
    },
    {
      name: "values",
      title: "Values",
      type: "blockContent",
    },
    {
      name: "perksHeading",
      title: "Perks Section Heading",
      type: "string",
    },
    {
      name: "perks",
      title: "Perks & Benefits",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      media: "logo",
      title: "title",
      subtitle: "description",
    },
  },
};
