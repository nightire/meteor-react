Posts = new Meteor.Collection('posts');

if (Meteor.isServer) {
  Posts.remove({});

  Posts.insert({
    title: 'Integrate React with Meteor v1.3-beta',
    content: 'HELL YEAH! I just did that, awwwwwwwwwwwwwwwwwwwwwwwwwwwwwsome!',
  });

  Posts.insert({
    title: 'A practicing guide of conventional coding styles',
    content: 'Just Do It.',
  });

  Posts.insert({
    title: 'Welcome to this little demo',
    content: '...as title tells you, welcome my friend!',
  });
}
