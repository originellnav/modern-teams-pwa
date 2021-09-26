import { BsListUl, BsLink45Deg } from "react-icons/bs";

export default {
  name: "routing",
  type: "document",
  title: "Routing",
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      name: "headerNav",
      title: "Header Navigation Items",
      type: "array",
      of: [
        {
          type: "singletonNavItem",
          icon: BsLink45Deg,
        },
        {
          title: "Dropdown",
          icon: BsListUl,
          type: "dropdownNavItem",
        },
      ],
    },
    {
      name: "footerNav",
      title: "Footer Navigation Items",
      type: "footerNav",
    },
    {
      name: "footerSocial",
      title: "Footer Social Media Items",
      type: "array",
      of: [{ type: "socialMediaItem" }],
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      description: "This is the logo that will be displayed in the header and footer, and will link to the homepage.",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: "Navigation",
      };
    },
  },
};
