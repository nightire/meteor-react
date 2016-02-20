Meteor.publish('posts', () => {
  const selector = {category: {$ne: 'private'}};
  return Posts.find(selector);
});
