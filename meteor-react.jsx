Tasks = new Mongo.Collection('tasks');

if (Meteor.isClient) {
  Meteor.startup(() => {
    ReactDOM.render(<App />, document.querySelector('[role="application"]'));
  });
}
