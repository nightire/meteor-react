import React, {Component} from 'react';
import 'whatwg-fetch';

export default class DemoContainer extends Component {
  constructor() {
    super();
    this.state = { people: [] };
  }

  componentDidMount() {
    fetch(`//api.github.com/users`)
      .then(response => response.json())
      .then(people => this.setState({ people }));
  }

  render() {
    return <ul>{this.state.people.map(this.renderPerson)}</ul>;
  }

  renderPerson({id, login: username}) {
    return <li key={id}>{id} - {username}</li>;
  }
}
