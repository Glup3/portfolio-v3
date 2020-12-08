export default {
  name: 'socialNetwork',
  title: 'Social Network',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'link',
      title: 'URL',
      type: 'url',
    },
    {
      name: 'imageLink',
      title: 'Image URL',
      description: 'Example Provider: https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/ICON_NAME.svg',
      type: 'url',
    },
  ],
};
