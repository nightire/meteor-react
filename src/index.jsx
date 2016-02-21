import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router-ssr';
import {mount, withOptions} from 'react-mounter';

import StaticLayout from '../imports/layouts/StaticLayout.jsx';
import PostList from '../imports/containers/PostList.js';
import PostShow from '../imports/containers/PostShow.js';

import googleAnalytics from '../imports/services/google-analytics.js';

const mounter = withOptions({
  rootProps: {className: 'react-root'},
}, mount);

FlowRouter.route('/', {
  name: 'home',
  action() {
    mounter(StaticLayout, {
      content: <PostList />,
    });
  },
});

FlowRouter.route('/post/:_id', {
  name: 'post',
  action(params) {
    mounter(StaticLayout, {
      content: <PostShow _id={params._id} />,
    });
  },
});

FlowRouter.triggers.enter([googleAnalytics]);
