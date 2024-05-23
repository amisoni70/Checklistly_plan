import React, {useState} from 'react';

function TodoList({ user }) {

const [todo, setTodo] = useState("");

// List of existing Todos that will be displayed in the "My tasks" container
const [todos, setTodos] = useState([
  {text: "Do laundry", id:1, completed: false },
  {text: "Go Grocery Shopping", id:1, completed: false },
  {text: "Finish ALX assignments", id:1, completed: false },
  {text: "File company taxes", id:1, completed: false },
]);

// This function adds a new Todo task onto the exisiting todos
const handleAdd = () => {
  setTodos([...todos, { text: todo, id: Date.now(), completed: false }]);
    setTodo("");
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
      <button onClick={handleAdd}>Add task</button>

      {/* Mapping a new Todo to existing Todos in the My tasks container */}
      <ul className="container">
        <h2>My Tasks</h2>
        {todos.map((todo) => {
          return (
            <div className="list-container">
              <li>{todo.text}</li>
              <button>Remove</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;