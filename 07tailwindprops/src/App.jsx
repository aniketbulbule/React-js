import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  let obj={
    username:"aniket",
    password:"root",
  }

  let arr=[10,20]

  return (
    <>
     <h1 className="bg-green-400 text-black p-4 rounded-xl">tailwind css</h1>
     {/* <Card channel="chai aur code" someObj={obj} someArr={arr}/> */}
     <Card username="chai aur code" btnText="click me"/>
     <Card username="chai aur biscuit" btnText="visit me"/>
    </>
  )
}

export default App
