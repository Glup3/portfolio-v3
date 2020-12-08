import createSchema from 'part:@sanity/base/schema-creator';

import schemaTypes from 'all:part:@sanity/base/schema-type';
import content from './content';
import project from './project';
import technology from './technology';
import socialNetwork from './socialNetwork';
import author from './author';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([content, project, technology, socialNetwork, author]),
});
