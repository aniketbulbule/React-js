import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Show from './Components/Show'
import { use } from 'react'


// let a=100;
function App() {

  let [counter,setCount]=useState(0)


  let addCount=()=>{
  counter=counter+1;
  // console.log(counter);
  setCount(counter)
  }

  let removeValue=()=>{
    setCount(counter-1)
  }

  return (  
    <>
      <h1>hello,react-js</h1>
      <Show/>   {/* <Show></Show> */}
      <p>{counter}</p>
      <button onClick={addCount}>add count:{counter}</button>
      <br/>
      <button onClick={removeValue}>remove count:{counter}</button>
    </>
  )
}

export default App
  