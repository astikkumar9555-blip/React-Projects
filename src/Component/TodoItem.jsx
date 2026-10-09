import React from "react";

const TodoItem = () => {
  return (
    <div className="todo-container">
      <li className="todo-item">
         <span>
            <input type="checkbox" />
        <span>Eat</span>
         </span>
        <span>...</span>
         
      </li>
      
       <li className="todo-item">
         <span>
            <input type="checkbox" />
        <span>College</span>
         </span>
        <span>...</span>
         
      </li>
      
       <li className="todo-item">
         <span>
            <input type="checkbox" />
        <span>Socity</span>
         </span>
        <span>...</span>
         
      </li>
      
        <li className="todo-item">
         <span>
            <input type="checkbox" />
        <span>Task</span>
         </span>
        <span>...</span>
         
      </li>
      
       <li className="todo-item">
         <span>
            <input type="checkbox" />
        <span>Coding</span>
         </span>
        <span>...</span>
         
      </li>
      
       <li className="todo-item">
         <span>
            <input type="checkbox" />
        <span>Devlopment</span>
         </span>
        <span>...</span>
         
      </li>
      
    </div>
  );
};


export default TodoItem;