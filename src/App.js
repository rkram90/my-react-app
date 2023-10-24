import './App.css';
import React, { createContext, useReducer } from 'react';
import ComponentA from './components/UseContextWithReducer/ComponentA';
import ComponentX from './components/UseContextWithReducer/ComponentX';
import ComponentY from './components/UseContextWithReducer/ComponentY';
import UseStateDataFetch from './components/UseStateAndUseReducer/UseStateDataFetch';
import UserReducerDataFetch from './components/UseStateAndUseReducer/UserReducerDataFetch';
import MainComponent from './components/UseCallBackPractice/MainComponent';
import MemoCounter from './components/UseMemoPractice/MemoCounter';
import FocusInput from './components/UseRefPractice/FocusInput';
import Timer from './components/UseRefPractice/Timer';

/*
Global store using useContext and useReducer is set from the App js
*/

export const counterContext = createContext();

const initialState = {
  counterA: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increament':
      return { ...state, counterA: state.counterA + (action.value ? action.value : 1) };
    case 'decrement':
      return { ...state, counterA: state.counterA - (action.value ? action.value : 1) };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

function App() {

  const [countState, dispatcher] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <MemoCounter />
      <FocusInput />
      <Timer />
    </div>
    // <counterContext.Provider value={{ countState, dispatcher }}>
    //     <p>Counter Value: {countState.counterA}</p>
    //     <hr/>
    //     <ComponentA></ComponentA>
    //     <ComponentX></ComponentX>
    //     <ComponentY></ComponentY>
    // </counterContext.Provider>
    // <UseStateDataFetch></UseStateDataFetch>
    // <UserReducerDataFetch></UserReducerDataFetch>
    // <MainComponent/>
  );
}

export default App;
