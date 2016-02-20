import React from 'react';
import {mount} from 'react-mounter';

import StaticLayout from '../imports/layouts/StaticLayout.jsx';
import PostList from '../imports/containers/PostList.js';
import PostShow from '../imports/containers/PostShow.js';

FlowRouter.route('/', {
  name: 'home',

  action() {
    mount(StaticLayout, {
      content: <PostList />,
    });
  },
});

FlowRouter.route('/post/:_id', {
  name: 'post',

  action(params) {
    mount(StaticLayout, {
      content: <PostShow _id={params._id} />,
    });
  },
});
