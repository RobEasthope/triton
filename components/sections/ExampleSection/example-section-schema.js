export default {
  type: 'object',
  name: 'exampleSection',
  title: 'Text',
  fields: [
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
      // TODO Use portable text
      type: 'string',
      validation: (Rule) =>
        Rule.required().warning('Example section: Text is missing'),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
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
