export default {
  type: 'object',
  name: 'textSection',
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
      type: 'fullText',
      validation: (Rule) =>
        Rule.required().warning('Text section: Text is missing'),
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }: { title: string }): Record<string, unknown> {
      return {
        title: title || 'Text section',
      };
    },
  },
};
