export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'username',
      title: 'Username',
      type: 'string',
    },
    {
      name: 'firstname',
      title: 'First Name',
      type: 'string',
    },
    {
      name: 'lastname',
      title: 'Last Name',
      type: 'string',
    },
    {
      name: 'birthdate',
      title: 'Birthdate',
      type: 'datetime',
    },
    {
      name: 'profession',
      title: 'Profession',
      type: 'string',
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'string',
    },
    {
      name: 'aboutMe',
      title: 'About Me',
      type: 'content',
    },
    {
      name: 'socialNetworks',
      title: 'Social Networks',
      type: 'array',
      of: [
        {
          type: 'socialNetwork',
        },
      ],
    },
  ],
};
