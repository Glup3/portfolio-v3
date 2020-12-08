export default {
  name: 'technology',
  title: 'Technology',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'imageLink',
      title: 'Image URL',
      description: 'Example Provider: https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/ICON_NAME.svg',
      type: 'url',
    },
    {
      name: 'special',
      title: 'Special',
      description: 'Is this technology special for you?',
      type: 'boolean',
    },
  ],
};
