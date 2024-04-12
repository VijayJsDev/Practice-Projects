// import {} from "react-redux";

// const initialState = {count: 0};
const employeeLists = [];

const employeeReducer = (state = employeeLists, actions) => {
  switch (actions.type) {
    case "add": {
      return [...state, actions.payload];
    }
    case "edit": {
      let currentState = [...state];
      currentState[actions.payload.index] = actions.payload.data;
      return currentState;
    }
    case "delete": {
      return state.filter((employee, index) => index !== actions.payload.index);
      // return state.filter((employee, index) => index !== actions.payload.index);
      // let currentState = [...state];
      // currentState.filter((employee, index) => index !== actions.payload.index);
      // return currentState;
      // state.filter((employee, index) => {index !== actions.payload.index})
      // return state;
    }
    default:
      return state;
  }
};

export default employeeReducer;
