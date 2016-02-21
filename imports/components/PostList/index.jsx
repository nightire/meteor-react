import React, {Component} from 'react';
// import {FlowRouter} from 'meteor/kadira:flow-router-ssr';
import {FormattedNumber, FormattedPlural} from 'react-intl';
export * from './PostListLoading.jsx';

export default class PostList extends Component {
  constructor() {
    super();
    this.state = {
      unreadCount: 1,
    };
  }

  render() {
    const posts = this.props.posts.map(({_id, title}) => (
      <li key={_id}>
        <a href={FlowRouter.path('post', {_id})}>{title}</a>
      </li>
    ));

    const {unreadCount} = this.state;

    return (
      <section>
        <header>
          <h2>Post List</h2>
          <FormattedNumber value={unreadCount} /> {' '}
          <FormattedPlural value={unreadCount} one="message" other="messages" />
        </header>

        <ul>{posts}</ul>
      </section>
    );
  }
}
