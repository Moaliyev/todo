import "./Todo.css";
import Trash from "./Images/trash-bin.png";

function ToDo({ title, isCompleted, handleClick, id, handleDelete }) {
  return (
    <div className="todo-container">
      <div className="first-column">
        <div className="checkmark-container">
          <label className="container">
            <input
              type="checkbox"
              checked={isCompleted ? true : false}
              onChange={() => {
                handleClick(id);
              }}
            />
            <div className="checkmark"></div>
          </label>
        </div>
        <p
          className={isCompleted ? "completed" : "incompleted"}
          onClick={() => handleClick(id)}>
          {title}
        </p>
      </div>
      <div className="trash-container" onClick={() => handleDelete(id)}>
        <img src={Trash} alt="trash bin" />
      </div>
    </div>
  );
}

export default ToDo;
