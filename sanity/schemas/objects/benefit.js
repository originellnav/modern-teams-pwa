import { BsDot } from "react-icons/bs";
export default {
  name: "benefit",
  title: "Benefit",
  type: "object",
  icon: BsDot,
  fields: [
    {
      name: "benefitText",
      title: "Benefit Text",
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
  ],
  preview: {
    select: {
      title: "benefitText",
      subtitle: "benefitEmoji",
    },
  },
};
