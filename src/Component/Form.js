import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import RenderData from "./RenderData";

const Form = () => {
  const [data, setData] = useState("");
  const [toggle, setToggle] = useState(false);

  const dispatch = useDispatch();

  const getUniqueId = () => {
    return Math.floor(Date.now() * Math.random(100)).toString();
  };

  const handleSubmit = () => {
    console.log("SUBMIT");
    dispatch({
      type: "ADD_TODO",
      payload: { data, id: getUniqueId() },
    });
  };

  const handleUpdate = () => {
    console.log("UPDATE");
    setToggle(false);
    dispatch({
      type: "UPDATE_TODO",
      payload: data,
    });
  };

  const handleChange = (e) => {
    setData(e.target.value);
  };

  return (
    <>
      <div>
        <input type="search" value={data} onChange={handleChange} />
        {!toggle ? <button onClick={handleSubmit}>ADD DATA</button> : <button onClick={handleUpdate}>UPDATE</button>}
      </div>
      <RenderData setData={setData} setToggle={setToggle} />
    </>
  );
};

export default Form;
