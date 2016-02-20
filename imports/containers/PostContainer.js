import {composeWithTracker} from 'react-komposer';
import {PostList, PostListLoading} from '../components/PostList/index.jsx';

const composer = (props, onData) => {
  const handler = Meteor.subscribe('posts');

  if (handler.ready()) {
    const posts = Posts.find({}, {sort: {_id: 1}}).fetch();
    onData(null, {posts});
  }
};

export default composeWithTracker(composer, PostListLoading)(PostList);
