import { useState } from "react";

// eslint-disable-next-line react/prop-types
const CreateTodo = ({ inputHandler }) => {
  const [inputValue, setInputValue] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    inputHandler(inputValue);

    setInputValue("");
  };
  return (
    <div className="mt-[20px]">
      <form className="flex" onSubmit={(e) => submitHandler(e)}>
        <div> 
          
          <input
            className="p-2 border outline-none w-[250px]  "
            type="text"
            placeholder="Write Here"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <button className="bg-slate-600 text-white p-[5px] w-[50px]">Add</button>
      </form>
    </div>
  );
};

export default CreateTodo;
