import React, {useState} from 'react';
import "./TodoList.css";

function TodoList({ user }) {

// Defining my states

const [todo, setTodo] = useState("");
const [completedList, setCompletedList] = useState([]);

const [todos, setTodos] = useState([
  {text: "Do laundry", id:1, completed: false },
  {text: "Go Grocery Shopping", id:2, completed: false },
  {text: "Finish ALX assignments", id:3, completed: false },
  {text: "File company taxes", id:4, completed: false },
]);

const [editIndex, setEditIndex] = useState(null);
const [editedTodo, setEditedTodo] = useState("");

// Defining my functions

//This function extracts the username from the email address for a better UI

const getUser = (email) => {
  return email.split('@')[0];
};


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

// This function ticks the uncompleted task and marks it as completed

const handleChecked = (checkedId) => {
  const updatedList = todos.map((todo) => {
    return todo.id === checkedId
    ? { ...todo, completed: !todo.completed}
    : todo
  });
  setTodos(updatedList);
};

// This function edits a specific task and saves the new edited task

const handleEdit = (editId) => {
  setEditIndex(editId);
  setEditedTodo(todos.find((todo) => todo.id === editId).text);
};

// This function saves the new edited task

const handleSave = (saveId) => {
    const updatedList = todos.map((todo) =>
      todo.id === saveId ? { ...todo, text: editedTodo } : todo
    );
    setTodos(updatedList);
    setEditIndex(null);
    setEditedTodo("");
};

  return (
    <div>
      <h2>{getUser(user)}'s Todo List</h2>
      {/* Adding a Task in the input field */}
      <input 
      className="TodoList-input1"
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
              {editIndex === todo.id ? (
              <input
                className="TodoList-input2"
                type="text"
                value={editedTodo}
                onChange={(e) => setEditedTodo(e.target.value)}
              />
            ) : todo.completed ? (
              <li style= {{ textDecoration: "line-through" }}>{todo.text}</li>
        ) : (
              <li>{todo.text}</li>
        )}
              <input type="checkbox"  onChange={() => handleChecked(todo.id)}/>
              <button className="TodoList-button" onClick={() => handleEdit(todo.id)}>Edit</button>
              <button className="TodoList-button" onClick={() => handleSave(todo.id)}>Save</button>
              <button className="TodoList-button" onClick={() =>handleRemove(todo.id)}>Done</button>
            </div>
          );
        })}
      </ul>

      <ul className="TodoList-container">
        <h2>Completed Tasks</h2>
        {/* Showing the removed tasks from my tasks into the completed tasks */}
        {completedList.map((todo) => (
          <div key={todo.id} className="TodoList-list-container">
            <li style={{ color: "green", fontWeight: "bold" }}>{todo.text}</li>
          </div>
        ))}
      </ul>

      <button className="TodoList-button">Logout</button>
    </div>
  );
}

export default TodoList;