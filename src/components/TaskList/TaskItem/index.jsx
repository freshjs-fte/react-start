function TaskItem(props) {
  const { task } = props
  return (
    <li>
      <input type="checkbox" checked={task.isChecked}  />
      {task.text}
    </li>
  );
}

export default TaskItem;
