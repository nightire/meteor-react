import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router-ssr';
import {mount} from 'react-mounter';

import StaticLayout from '../imports/layouts/StaticLayout.jsx';
import PostList from '../imports/containers/PostList.js';
import PostShow from '../imports/containers/PostShow.js';

import googleAnalytics from '../imports/services/google-analytics.js';

FlowRouter.route('/', {
  // name is optional, but it could be handy if you want to refer to this route
  // programatically, e.g. `FlowRouter.go('home')`
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

FlowRouter.triggers.enter([googleAnalytics]);
