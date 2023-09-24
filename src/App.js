import logo from './logo.svg';
import './App.css';
import Counter from './components/UseEffectPractice/Counter';
import MouseContainer from './components/UseEffectPractice/MouseContainer';
import DisplayXYAxis from './components/UseEffectPractice/DisplayXYAxis';
import GetPosts from './components/DataFetch/GetPosts';
import FindPost from './components/DataFetch/FindPost';
import ComponentC from './components/Context/ComponentC';
import CounterWithReducer from './components/UseReducer/CounterWithReducer'
import React from 'react';


export const priceContext = React.createContext();

export const itemContext = React.createContext();


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Counter /> */}
      {/* <MouseContainer></MouseContainer> */}
      {/* <DisplayXYAxis></DisplayXYAxis> */}
      {/* <GetPosts></GetPosts> */}
      {/* <FindPost></FindPost> */}

      {/* <priceContext.Provider value={"$200"}>
        <itemContext.Provider value={"Samsung"}>
          <ComponentC />
        </itemContext.Provider>
      </priceContext.Provider> */}

      <CounterWithReducer/>
    </div>
  );
}

export default App;
