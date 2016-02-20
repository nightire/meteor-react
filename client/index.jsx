import React from 'react';
import {mount} from 'react-mounter';

import StaticLayout from '../imports/layouts/StaticLayout.jsx';
import PostContainer from '../imports/containers/PostContainer.js';

FlowRouter.route('/', {
  name: 'home',
  action() {
    mount(StaticLayout, {
      content: (<PostContainer />),
    });
  },
});
