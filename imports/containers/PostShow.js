import {composeWithTracker} from 'react-komposer';
import {PostShow, PostShowWarning} from '../components/PostShow/index.jsx';
import {DocHead} from 'meteor/kadira:dochead';

const composer = (props, onData) => {
  const {_id} = props;
  const handler = Meteor.subscribe('post', _id);


  if (handler.ready()) {
    const post = Posts.findOne({_id});
    onData(null, {post});
    // onData(new Error(`找不到 ID 为 ${_id} 的文章`));

    DocHead.setTitle(post.title);
    DocHead.addMeta({
      name: 'description',
      content: post.content.substr(0, 20),
    });
  }
};

export default composeWithTracker(composer, null, PostShowWarning)(PostShow);
