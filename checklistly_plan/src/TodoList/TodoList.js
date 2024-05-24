import React, {useState} from 'react';
import "./TodoList.css";

function TodoList({ user }) {

const [todo, setTodo] = useState("");

const [completedList, setCompletedList] = useState([]);

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

// This function removes a task from my tasks and shows it in the completed tasks
const handleRemove = (deleteId) => {

  const updatedList = todos.filter((todo) => todo.id !== deleteId);
    setTodos(updatedList);
  
  const deletedTodo = todos.find((todo) => todo.id === deleteId);
    setCompletedList([...completedList, deletedTodo]);
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
            <div className="TodoList-list-container">
              <li>{todo.text}</li>
              <button className="TodoList-button" onClick={() =>handleRemove(todo.id)}>Remove</button>
            </div>
          );
        })}
      </ul>

      <ul className="TodoList-container">
        <h2>Completed Tasks</h2>
        {/* Showing the removed tasks from my tasks into the completed tasks */}
        {completedList.map((todo) => (
          <div key={todo.id} className="TodoList-list-container">
            <li style={{ textDecoration: "line-through" }}>{todo.text}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;