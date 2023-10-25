import TodoForm from "./TodoForm";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ToDo from "./ToDo";
import TodoEdit from "./TodoEdit";
function TodoWrapper() {
  const [list, setList] = useState([]);
  const addList = (todo) => {
    setList([
      ...list,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };
  const toggleComplete = (id) => {
    setList(
      list.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteTodo = (id) => {
    setList(list.filter((todo) => todo.id !== id));
  };
  const editTodo = (id) => {
    setList(
      list.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };
  const editList = (task, id) => {
    setList(
      list.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };
  return (
    <>
      <div className="TodoWrapper">
        <h1>Get Things Done !</h1>
        <TodoForm addList={addList}></TodoForm>
        {list.map((todo, index) =>
          todo.isEditing ? (
            <TodoEdit editList={editList} task={todo}></TodoEdit>
          ) : (
            <ToDo
              task={todo}
              key={index}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            ></ToDo>
          )
        )}
      </div>
    </>
  );
}

export default TodoWrapper;
