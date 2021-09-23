import React from "react";
import TaskItem from "./TaskItem";

class TaskList extends React.Component {
  constructor() {
    super();

    this.state = {
      tasksData: [
        {
          text: "Купить яблоки",
          isChecked: false,
        },
        {
          text: "Пылесосить",
          isChecked: true,
        },
        {
          text: "Тренировка",
          isChecked: true,
        },
      ],
    };

    this.filterChecked = () => {
      const filtered = this.state.tasksData.filter((task) => {
        // console.log(task.isChecked);
  
        if (task.isChecked === true) {
          return true;
        }
        return false;
      });

      return filtered
    }
  }

  render() {
    const list = this.state.tasksData;

    /* const arrayJSX1 = [];
    for (let index = 0; index < list.length; index++) {
      const task = list[index];
      arrayJSX1.push(<TaskItem task={task} />);
    } */

    const filtered = this.filterChecked()

    const arrayJSX2 = filtered.map((task) => {
      return <TaskItem task={task} />;
    });

    return (
      <div>
        <h4>Task list:</h4>
        <ul>{arrayJSX2}</ul>
      </div>
    );
  }
}

export default TaskList;
