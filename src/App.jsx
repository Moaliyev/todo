import { useState, useEffect } from "react";
import "./App.css";
import ToDo from "./Todo";

function App() {
  const [toDo, setToDo] = useState([]);
  const [title, setTitle] = useState("");
  const [id, setId] = useState(0);
  const handleChange = e => {
    setTitle(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newToDo = {
      id: id,
      title: title,
      isCompleted: false,
    };
    const newId = id + 1;
    setId(newId);
    const newList = toDo;
    newList.push(newToDo);
    setToDo(newList);
    setTitle("");
  };

  const handleClick = id => {
    const newTodo = toDo;
    newTodo.forEach(node => {
      node.id == id ? (node.isCompleted = !node.isCompleted) : null;
    });
    setToDo([...newTodo]);
  };

  const handleDelete = id => {
    let newTodo = toDo;
    newTodo = newTodo.filter(node => node.id != id);
    setToDo([...newTodo]);
    console.log("deleted");
    console.log(newTodo);
  };

  return (
    <main>
      <h1>things to do</h1>
      <form action="." onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add New"
          onChange={handleChange}
          value={title}
        />
      </form>

      {toDo.length != 0 ? (
        toDo.map(node => {
          return (
            <ToDo
              key={node.id}
              title={node.title}
              id={node.id}
              isCompleted={node.isCompleted}
              handleDelete={() => handleDelete(node.id)}
              handleClick={() => handleClick(node.id)}></ToDo>
          );
        })
      ) : (
        <h3>Congrats! You do not have any tasks to do!</h3>
      )}
    </main>
  );
}

export default App;
