import React from "react";
import TaskItem from "./TaskItem";

class TaskList extends React.Component {
  constructor(props) {
    super(props);

    // instance
    this.state = {
      tasksData: [],
    };
  }

  // prototype
  componentDidMount() {
    fetch("http://fe_mentor:5000/api/tasks")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const tasks = data.data;
        this.setState({
          tasksData: tasks,
        });
      });
  }

  // instance
  filterChecked = (verdict = true) => {
    const filtered = this.state.tasksData.filter((task) => {
      // console.log(task.isChecked);
      if (verdict) {
        return task.isChecked;
      }
      return !task.isChecked;
    });

    return filtered;
  };

  deleteTask = (deleteID) => {
    this.setState((prevState) => {
      const result = prevState.tasksData.filter((task) => {
        /* 
          if (task.id === deleteID) {
            return false;
          } else {
            return true;
          } */

        return task.id !== deleteID;
      });

      return {
        tasksData: result,
      };
    });
  };

  makeJSX = (list) => {
    const arrayJSX2 = list.map((task) => {
      return (
        <TaskItem task={task} deleteTask={this.deleteTask} key={task.id} />
      );
    });
    return arrayJSX2;
  };

  // prototype
  render() {
    // const filtered = this.filterChecked(false);
    const list = this.state.tasksData;

    return (
      <div>
        <h4>Task list:</h4>
        <ul>{this.makeJSX(list)}</ul>
      </div>
    );
  }
}

export default TaskList;
