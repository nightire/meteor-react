Task = React.createClass({
  propTypes: {
    task: React.PropTypes.object.isRequired,
  },

  toggleChecked() {
    Tasks.update(this.props.task._id, {
      $set: {checked: !this.props.task.checked},
    });
  },

  deleteTask() {
    Tasks.remove(this.props.task._id);
  },

  render() {
    const taskStatus = this.props.task.checked ? 'checked' : '';

    return (
      <li className={taskStatus}>
        <button className="delete" onClick={this.deleteTask}>
          &times;
        </button>

        <input
          type="checkbox"
          readOnly
          checked={this.props.task.checked}
          onClick={this.toggleChecked}
        />

        <span className="text">{this.props.task.text}</span>
      </li>
    );
  },
});
