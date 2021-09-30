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
    console.log("mount");

    fetch("http://192.168.1.149:5000/api/tasks")
      .then((response) => {
        return response.json();
      })

      .then((result) => {
        const tasks = result.data;

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
    const arrayJSX = list.map((task) => {
      return (
        <TaskItem task={task} deleteTask={this.deleteTask} key={task.id} />
      );
    });
    return arrayJSX;
  };

  // prototype
  render() {
    // const filtered = this.filterChecked(false);
    const list = this.state.tasksData;

    return (
      <div>
        <h4>Task list:</h4>
        <ul>{this.makeJSX(list)}</ul>
        <div>{JSON.stringify(this.state.tasksData)}</div>
      </div>
    );
  }
}

export default TaskList;
