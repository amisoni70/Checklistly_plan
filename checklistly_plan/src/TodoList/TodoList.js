import React, {useState} from 'react';
import "./TodoList.css";

function TodoList({ user }) {

const [todo, setTodo] = useState("");

// List of existing Todos that will be displayed in the "My tasks" container
const [todos, setTodos] = useState([
  {text: "Do laundry", id:1, completed: false },
  {text: "Go Grocery Shopping", id:2, completed: false },
  {text: "Finish ALX assignments", id:3, completed: false },
  {text: "File company taxes", id:4, completed: false },
]);

// This function adds a new Todo task onto the exisiting todos & clears it using the empty string
const handleAdd = () => {
  setTodos([...todos, { text: todo, id: Date.now(), completed: false }]);
  setTodo("");  
};

//This function removes a task from the Todo list
const handleRemove = (deleteId) => {

  const updatedList = todos.filter((todo) => todo.id !== deleteId);
    setTodos(updatedList);
};

  return (
    <div>
      <h2>{user}'s Todo List</h2>
      {/* Adding a Task in the input field */}
      <input
      type="text"
      value={todo}
      onChange={(e) => setTodo(e.target.value)}
      />
      <button className="TodoList-button" onClick={handleAdd}>Add task</button>

      <ul className="TodoList-container">
        <h2>My Tasks</h2>
        {/* Mapping a new Todo to existing Todos in the My tasks container */}
        {todos.map((todo) => {
          return (
            <div className="Todolist-container">
              <li>{todo.text}</li>
              <button className="TodoList-button" onClick={() =>handleRemove(todo.id)}>Remove</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;