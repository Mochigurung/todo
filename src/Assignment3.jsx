/*import React from 'react';

const HelloWorld = () => {
    return (
        <div>
            <h1>Hello, World!</h1>
        </div>
    );
};

export default HelloWorld;*/
import React, { useState } from "react";
import './Assignment3.css';
//import PropTypes from "prop-types";

const Assignment3 = (props) => {
  //a text input and a ‘add’ button
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);

  const [isChecked, setIsChecked] = useState(false);
  const [checkedItem, setCheckedItem] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputText(value);
  };
  const handleButtonClick = () => {
    if (inputText !== "") {
      setInputText("");
      setTodoList([...todoList, inputText]);
    } else {
      alert("Please enter a value");
    }
  };
  const handleDelete = (todo, index) => {
    const newList = [...todoList];
    newList.splice(index, 1);
    setTodoList(newList);
  };
  const handleCheckbox = (e, index) => {
    //   console.log(e)
    const value = e.target.checked;
    setIsChecked(value);

    if (value) setCheckedItem([...checkedItem, index]);
    else {
      const newCheckedList = [...checkedItem];
      const i = newCheckedList.indexOf(index);
      newCheckedList.splice(i, 1);

      setCheckedItem(newCheckedList);
    }
  };
  return (
    <div className="todo-list-container">
      <h1>To Do list</h1>
      <input type="text" value={inputText} onChange={handleInputChange}
   />
  
      <button onClick={handleButtonClick}>Add</button>
      <ul className="todo-list">
        {todoList.map((todo, index) => {
          console.log(checkedItem.indexOf(index));
          return (
            <li className="todo-item" key={index}>
              <input
                type="checkbox"
                onChange={(e) => handleCheckbox(e, index)}
              />
              <p
                className={checkedItem.indexOf(index) != -1 ? "completed" : ""}
              >
                {index} - {todo}
              </p>
  
            </li>
            
          );
        })}
      </ul>
    </div>
  );
};

export default Assignment3;