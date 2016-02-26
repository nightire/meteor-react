import React from 'react';
// import {FlowRouter} from 'meteor/kadira:flow-router-ssr';
import {mount, withOptions} from 'react-mounter';

import StaticLayout from '../imports/layouts/StaticLayout.jsx';
import PostList from '../imports/containers/PostList.js';
import PostShow from '../imports/containers/PostShow.js';

import Demo from '../imports/components/Demo/index.jsx';
import HigherOrder from '../imports/components/Demo/HigherOrder.jsx';
import People from '../imports/components/Demo/People.jsx';

import googleAnalytics from '../imports/services/google-analytics.js';

const mounter = withOptions({
  rootProps: {className: 'react-root'},
}, mount);

// const locale = navigator.language || navigator.browserLanguage;
const locale = 'en';

FlowRouter.route('/', {
  name: 'home',
  action() {
    mounter(StaticLayout, {
      locale,
      content: () => <Demo />,
    });
  },
});

FlowRouter.route('/demo/higher-order', {
  name: 'demo-higher-order',
  action() {
    mounter(StaticLayout, {
      locale,
      content: () => <HigherOrder />,
    });
  },
});

FlowRouter.route('/demo/container', {
  name: 'demo-container',
  action() {
    mounter(StaticLayout, {
      locale,
      content: () => <People />,
    });
  },
});

FlowRouter.route('/blog', {
  name: 'blog',
  action() {
    mounter(StaticLayout, {
      locale,
      content: () => <PostList />,
    });
  },
});

FlowRouter.route('/blog/:_id', {
  name: 'post',
  action(params) {
    mounter(StaticLayout, {
      locale,
      content: () => <PostShow _id={params._id} />,
    });
  },
});

FlowRouter.triggers.enter([googleAnalytics]);
