 import React from "react";
 import "./App.css";

 import Header from "./Component/Header";
 
 import TodoItem from './Component/TodoItem';

 import Button from './Component/Button';

 import './index.css';
 function App(){
    return (
      < div className="todo-container">
      <Header  />
      <TodoItem />
      <Button/>
      </div>

    );
 }

 export default App;