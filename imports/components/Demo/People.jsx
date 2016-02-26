import React, {Component} from 'react';
import 'whatwg-fetch';

/*
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
    return <ul>{this.state.people.map(this.renderPerson.bind(this))}</ul>;
  }

  renderPerson({id, login, html_url, avatar_url}) {
    return <li key={id}>
      {this.renderAvatar(avatar_url, 40)}
      {this.renderProfile(login, html_url)}
    </li>;
  }

  renderProfile(username, url) {
    return <a href={url}>{username}</a>;
  }

  renderAvatar(avatar, size) {
    return <img src={avatar} style={{width: size}} />;
  }
}
*/

export default class People extends Component {
  render() {
    return <ul>
    </ul>;
  }
}
