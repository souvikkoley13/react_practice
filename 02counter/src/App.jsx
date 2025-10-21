import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)

  //let counter = 15

  const addValue = () => {
    // counter += 1;
    //console.log("clicked",counter);
    // setCounter(counter + 1)
    if(counter < 20){
      setCounter(counter+1)
    }
  }

  const removeValue = () => {
    if(counter > 0){
      setCounter(counter-1)
    }
  }

  return (
    <>
    <h1>Souvik aur water</h1>
    <h2>counter value: {counter}</h2>

    <button onClick={addValue}>Add value</button>
    <br />
    <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
