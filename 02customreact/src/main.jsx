import React, { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function Show(){
  return(
    <h1>hello,aniket 2</h1>
  )
}

let reactElement={
  type:'a',
  props:{
    href:"https://google.com",
    target:"_blank",
  },
  Children:"click here go to google"
}

const anotherElement=React.createElement(
  'a',
  {
    href :"https://google.com",target:"_blank"},
    "click here go to google"
  
)
createRoot(document.getElementById('root')).render(
    // <>
    // <App />
    // <Show/>
    // anotherElement
    // </>
    anotherElement
    
)
