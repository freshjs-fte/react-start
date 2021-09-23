function TaskItem(props) {
  const { task, deleteTask } = props;
  return (
    <li>
      <input type="checkbox" checked={task.isChecked} onChange={() => {}} />
      {task.text}
      <span
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        Del
      </span>
    </li>
  );
}

export default TaskItem;
