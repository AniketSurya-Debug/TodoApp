import { useEffect, useRef, useState } from "react";
import addButton from "../assets/addButton.png";
import "../components/InputFields.css";

export const InputFields = ({ addTodoList, toggleButton, editState }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [addToDo, setAddToDo] = useState(false);

  useEffect(() => {
    if (toggleButton) {
      setTitle(editState.title);
      setDescription(editState.description);
    } else {
      setDescription("");
      setTitle("");
    }
  }, [toggleButton]);
  const addClick = () => {
    setAddToDo(true);
    addTodoList(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="container">
      <div className="inputWrapper">
        <input
          className="inputStyle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title..."
        ></input>
        <input
          className="inputStyle"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Input..."
        ></input>
      </div>
      <div>
        {toggleButton ? (
          <button className="buttonWrapper" onClick={addClick}>
            Update
          </button>
        ) : (
          <img
            className="buttonWrapper"
            src={addButton}
            onClick={addClick}
          ></img>
        )}
      </div>
    </div>
  );
};
