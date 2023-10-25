import { useState } from "react";
function TodoForm({ addList }) {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addList(value);
    setValue("");
  };
  return (
    <>
      <form className="TodoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          onChange={(e) => setValue(e.target.value)}
          placeholder="What is the task today !"
          value={value}
        ></input>
        <button type="submit" className="todo-btn">
          Add Task
        </button>
      </form>
    </>
  );
}

export default TodoForm;
