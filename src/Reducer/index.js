import { createStore, combineReducers } from "redux";
const initialState = {
  setData: getData() || [],
  id: "",
};

function getData() {
  return JSON.parse(localStorage.getItem("TODO"));
}

const ReducerFn = (state = initialState, action) => {
  console.log(action.payload);

  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        setData: [...state.setData, action.payload],
      };
    case "DELETE_TODO":
      return {
        ...state,
        setData: state.setData.filter((ele) => ele.id !== action.payload),
      };
    case "EDIT_TODO":
      return {
        ...state,
        id: action.payload,
      };
    case "UPDATE_TODO":
      let data = state.setData;
      let index = data.findIndex((ele) => ele.id === state.id);
      data[index] = { data: action.payload, id: state.id };
      return {
        ...state,
        setData: data,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ ReducerFn });
const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
  localStorage.setItem("TODO", JSON.stringify(store.getState().ReducerFn.setData));
});
export default store;
