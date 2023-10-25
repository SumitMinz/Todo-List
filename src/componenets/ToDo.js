import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
function ToDo({task, toggleComplete, deleteTodo, editTodo}) {
  return (
    <div className="Todo">
      <p onClick = {() => toggleComplete(task.id)} className = {`${task.completed ? 'completed' : ""}`}>{task.task}</p>
      <div>
        <FontAwesomeIcon onClick={()=>editTodo(task.id)} icon={faPenToSquare}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faTrash} onClick={()=>deleteTodo(task.id)}></FontAwesomeIcon>
      </div>
    </div>
  );
}

export default ToDo;
