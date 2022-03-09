import logo from "./logo.svg";
// import './App.css';
import { createStore } from "redux";

// ACTION IS INITIALIZE AN OBJECT 

// function reducer(state , action) {
// console.log('reducer', state, action)
// return "hi"
// }

// const store = createStore(reducer);
// console.log(store, 'store')

// store.dispatch({type:"USER_DATA"});

// ----------- INCREAMENT AND DECREAMENT COUNTER USING REDUX ----------- 

// function reducer(state = 0, action) {
//  if(action.type === "INCREAMENT"){
//    return state + 5
//  } else if(action.type === "DECREAMENT") {
//   return state - 1
//  } else if(action.type === "DOUBLE_INCREAMENT") {
//    return state + 2
//  } else if(action.type === "DOUBLE_DECREAMENT") {
//    return state - 2
//  }
// }

// const store = createStore(reducer);
// console.log(store, 'store');

// store.dispatch({type:"INCREAMENT"});
// console.log(store.getState(), 'getState()');

// store.dispatch({type:"DECREAMENT"});
// console.log(store.getState(), 'getState()');

// store.dispatch({type:"DOUBLE_INCREAMENT"});
// console.log(store.getState(), 'getState()');

// store.dispatch({type:"DOUBLE_DECREAMENT"});
// console.log(store.getState(), 'getState()');

// -------------- UPDATE OBJECT VALUE USING REDUX --------------- 

// const store = createStore(reducer);
// console.log(store, "store");

// function reducer(state = { name: "", email: "", address: "" }, action) {
//   if (action.type === "UPDATE_USER_NAME") {
//     return { ...state, name: action.userName };
//   } else if (action.type === "UPDATE_USER_EMAIL") {
//     return { ...state, email: action.userEmail };
//   }  else if (action.type === "UPDATE_USER_ADDRESS") {
//     return { ...state, address: action.userAddress };
//   } 
//   return state
// }

// store.dispatch({ type: "UPDATE_USER_NAME", userName: "Ammad" });
// console.log(store.getState(), "getState()");

// store.dispatch({ type: "UPDATE_USER_EMAIL", userEmail: "Ammad@gmail.com" });
// console.log(store.getState(), "getState()");

// store.dispatch({ type: "UPDATE_USER_ADDRESS", userAddress: "Karachi" });
// console.log(store.getState(), "getState()");

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
    </div>
  );
}

export default App;
