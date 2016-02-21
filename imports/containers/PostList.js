import {composeWithTracker} from 'react-komposer';
import subsManager from './subs-manager.js';
import {PostList, PostListLoading} from '../components/PostList/index.jsx';
import {DocHead} from 'meteor/kadira:dochead';

const composer = (props, onData) => {
  const handler = subsManager.subscribe('posts');

  if (handler.ready()) {
    const posts = Posts.find({}, {sort: {_id: 1}}).fetch();
    onData(null, {posts});
    // onData(null, null);
  }

  DocHead.setTitle('Meteor with React');
};

export default composeWithTracker(composer, PostListLoading)(PostList);
