export default {
  type: 'object',
  name: 'exampleSection',
  title: 'Text',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) =>
        Rule.required().warning('Text Section: Heading is missing'),
    },
    {
      name: 'text',
      title: 'Text',
      // TODO Use portable text
      type: 'string',
      validation: (Rule) =>
        Rule.required().warning('Text section: Text is missing'),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) =>
        Rule.required().warning('Text Section: Heading is missing'),
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
