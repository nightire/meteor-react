import React, {Component} from 'react';

export default () =>(
  <section>
    <AddOneButton />
  </section>
);

class AddOneButton extends Component {
  constructor() {
    super();
    this.state = { value: 0 };
    this.addOne = this.addOne.bind(this);
  }

  addOne() {
    this.setState({ value: this.state.value + 1 });
  }

  render() {
    return <button onClick={this.addOne}>
      Click to add: {this.state.value}
    </button>;
  }
}
