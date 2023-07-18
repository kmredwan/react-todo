import React, { useState } from "react";
import CreateTodo from "./CreateTodo";

const ToDoList = () => {
  const [allTodoData, setAllTodoData] = useState([]);

  const inputHandler = (data) => {
    const newData = {
      id: allTodoData.length + 1,
      name: data,
    };
    setAllTodoData((oldData) => [...oldData, newData]);
  };

  console.log(allTodoData);
  const removeTodo = (id) => {
    const todos = allTodoData.filter((todo) => todo.id !== id);
    setAllTodoData(todos);
  };
  return (
    <div className="">
      <CreateTodo inputHandler={inputHandler} />
      {allTodoData.map((item, key) => (
        <div
          className="listItem shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]	 even:bg-gray-400 odd:bg-gray-500  w-[300px] text-white mt-[20px] "
          key={key}
        >
          <div className="flex justify-between p-3  ">
            <h1 className="flex-1">{item.name}</h1>
            <div className="flex justify-center items-center bg-red-500 text-white p-[5px]">
              <button onClick={() => removeTodo(item.id)}>Remove</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToDoList;
