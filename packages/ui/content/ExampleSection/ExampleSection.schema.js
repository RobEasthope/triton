export default {
  name: 'ExampleSection',
  title: 'Example',
  type: 'object',
  fields: [
    {
      name: 'storybook',
      title: 'Storybook',
      type: 'note',
      options: {
        message:
          '<a href="https://triquetra-storybook.vercel.app/?path=/story/sections-examplesection--vanilla">Storybook UI preview</a>',
      },
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      codegen: { required: true },
      validation: (Rule) =>
        Rule.required().error('Example Section: Heading is missing'),
    },
    {
      name: 'text',
      title: 'Text',
      type: 'ExampleFormattedText',
      validation: (Rule) =>
        Rule.required().warning('Example section: Text is missing'),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: {
            isHighlighted: true, // <-- make this field easily accessible
          },
        },
        {
          // Editing this field will be hidden behind an "Edit"-button
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
      ],
      validation: (Rule) =>
        Rule.required().warning('Example Section: Heading is missing'),
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: title || 'Example section',
      };
    },
  },
};
