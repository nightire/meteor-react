import React, {Component} from 'react';

export default class Home extends Component {
  render() {
    return (
      <section>
        <h1>Welcome to Meteor with React {'&'} Redux</h1>
        <hr />
        <a href={FlowRouter.path('demo-higher-order')}>
          Higher Order Functions (Components)
        </a>
        <hr />
        <a href={FlowRouter.path('demo-container')}>Using Container</a>
      </section>
    );
  }
}
