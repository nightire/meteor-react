Meteor.publish('posts', () => {
  const selector = {category: {$ne: 'private'}};
  return Posts.find(selector);
});

Meteor.publish('post', _id => {
  check(_id, String);
  return Posts.find({_id});
});
