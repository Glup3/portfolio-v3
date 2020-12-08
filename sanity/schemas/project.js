export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'content',
    },
    {
      name: 'website',
      title: 'Website',
      type: 'url',
    },
    {
      name: 'sourceCode',
      title: 'Source Code',
      type: 'url',
    },
    {
      name: 'screenshots',
      title: 'Screenshots',
      type: 'array',
      of: [{ type: 'image' }],
    },
  ],
};
