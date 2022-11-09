import React from "react";
import { useSelector, useDispatch } from "react-redux";

const RenderData = (props) => {
  console.log(props);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.ReducerFn.setData);

  const handleEdit = (userId) => {
    console.log("EDIT");
    let editData = data.find((ele) => ele.id === userId);
    props.setData(editData.data);
    props.setToggle(true);
    dispatch({
      type: "EDIT_TODO",
      payload: userId,
    });
  };

  const handleDelete = (userId) => {
    console.log("DELETE");
    dispatch({
      type: "DELETE_TODO",
      payload: userId,
    });
  };

  return (
    <div className="render-container">
      <ul>
        {data.map((ele) => (
          <div key={ele.id}>
            <li>{ele.data}</li>
            <button onClick={(e) => handleEdit(ele.id)}>EDIT</button>
            <button onClick={(e) => handleDelete(ele.id)}>DELETE</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default RenderData;
