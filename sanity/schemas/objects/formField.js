import { BsLink45Deg } from "react-icons/bs";

export default {
  name: "formField",
  title: "Form Field",
  icon: BsLink45Deg,
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "type",
      title: "Field Type",
      type: "string",
      options: {
        list: [
          { title: "Text", value: "text" },
          { title: "Text Area", value: "textarea" },
          { title: "Email", value: "email" },
          { title: "Select", value: "select" },
        ],
      },
    },
    {
      name: "options",
      title: "Options",
      type: "array",
      of: [{ type: "string" }],
      hidden: ({ parent }) => parent?.type !== "select",
    },
    {
      name: "name",
      title: "Field Name",
      type: "string",
    },
    {
      name: "placeholder",
      title: "Field Placeholder",
      type: "string",
    },
    {
      name: "validation",
      title: "This is a required field (toggle validation).",
      type: "boolean",
    },
    {
      name: "validationMessage",
      title: "Validation Message",
      type: "string",
      description: "This is the message that will display when validation is triggered.",
      hidden: ({ parent }) => !parent?.validation,
    },
  ],
};
