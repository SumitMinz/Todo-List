import { useState } from "react";
function TodoEdit({ editList, task}) {
  const [value, setValue] = useState(task.task);
  const handleSubmit = (e) => {
    e.preventDefault();
    editList(value, task.id);
    setValue("");
  };
  return (
    <>
      <form className="TodoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          onChange={(e) => setValue(e.target.value)}
          placeholder="Update Task!"
          value={value}
        ></input>
        <button type="submit" className="todo-btn">
          Update Task
        </button>
      </form>
    </>
  );
}

export default TodoEdit;
