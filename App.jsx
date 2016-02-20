App = React.createClass({
  mixins: [ReactMeteorData],

  getInitialState() {
    return {
      hideCompleted: false,
    };
  },

  getMeteorData() {
    let query = {};

    if (this.state.hideCompleted) {
      query = {checked: {$ne: true}};
    }

    return {
      tasks: Tasks.find(query, {sort: {createdAt: -1}}).fetch(),
    };
  },

  // getTasks() {
  //   return [
  //     { _id: 0, text: 'This is Task #1' },
  //     { _id: 1, text: 'This is Task #2' },
  //     { _id: 2, text: 'This is Task #3' },
  //   ];
  // },

  handleSubmit(evt) {
    evt.preventDefault();

    Tasks.insert({
      text: this.refs.textInput.value,
      createdAt: new Date(),
    });

    evt.currentTarget.reset();
  },

  toggleHideCompleted() {
    this.setState({
      hideCompleted: !this.state.hideCompleted,
    });
  },

  renderTasks() {
    // return this.getTasks().map(task => {
    return this.data.tasks.map(task => {
      return <Task key={task._id} task={task} />;
    });
  },

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>

          <label className="hide-completed">
            <input
              type="checkbox"
              readOnly
              checked={this.state.hideCompleted}
              onClick={this.toggleHideCompleted}
            />
            Hide Completed Tasks
          </label>

          <form className="new-task" onSubmit={this.handleSubmit}>
            <input
              type="text"
              ref="textInput"
              placeholder="Add new task"
            />
          </form>
        </header>

        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  },
});
