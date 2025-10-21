import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherUser = "chai aur react"
//official react way to declare objects
const reactElement = React.createElement(
  'a', //tag
  {href: 'https://google.com',target: '_blank'}, //set attribute
  'click me to visit google' , //text inside the tag
  anotherUser
)

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>
  reactElement
)
