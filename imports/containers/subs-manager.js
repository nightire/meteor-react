// import SubsManager from 'meteor/meteorhacks:subs-manager';

export default new SubsManager({
  // maximum number of cache subscriptions
  cacheLimit: 10,
  // if not subscribed again, expire after 5 minutes
  expireIn: 5,
});
