// import {} from "react-redux";

// const initialState = {count: 0};

const employeeLists = [];


const employeeReducer = (state = employeeLists, actions) => {
  switch (actions.type) {
    case "add": {
      return [...state, actions.payload]
    }
    default:
      return state;
  }
};

export default employeeReducer;
