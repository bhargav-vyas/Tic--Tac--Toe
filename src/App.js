// import Blog from "./pages/blogg";
// import Newspaper from "./pages/newsPaper";
// import Patterns from "./pages/patterns";
import TicTacToa from './Componects/TicTacToa/TicTacToe';
// import './App.css';
import { useState } from 'react';
import Pikachu from './Componects/Pikachu/pikachu' 


function App() {
//   let count=10;
//  const [state,setState]=useState(0)
//  const [simple,setincrease]=useState(100)
//   const handleClick=()=>{
//     setState(state+1)}
//     const clickMe=()=>{
//       setincrease(simple+1000)
//     }
  

  return (
    <div className="APP">
    {/* <div><Newspaper/></div> */}
    <div><TicTacToa/></div>
    {/* <div><Blog/></div> */}
    {/* <div><Patterns/></div> */}
    {/* <div><Pikachu/></div> */}
    {/* {state}
    
    <button onClick={handleClick}>Click me </button>
    {simple}
    <button onClick={clickMe}>click karun bagha</button>
     */}
    </div>
  );
}

export default App;
