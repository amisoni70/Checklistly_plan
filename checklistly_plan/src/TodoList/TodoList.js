import React, {useState} from 'react';

function TodoList({ user }) {

const [todo, setTodo] = useState("");

  return (
    <div>
      <h2>{user}'s Todo List</h2>
      {/* Adding a Task in the input field */}
      <input
      type="text"
      value={todo}
      onChange={(e) => setTodo(e.target.value)}
      />
      <button>Add task</button>
    </div>
  );
}

export default TodoList;