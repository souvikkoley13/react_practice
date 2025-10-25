import { useState,useCallback,useEffect,useRef} from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState(8)
  const [numAllow,setNumAllow] = useState(false)
  const [charAllow,setCharAllow] = useState(false)  
  const [password,setPassword] = useState("")
  
  const passwordRef = useRef(null)
  const copyPasswordToClipboard = useCallback(
    () => {
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0,100);
      window.navigator.clipboard.writeText(password)
      alert("copied")
    },
    [password],
  )
  
  const passwordGenerator =useCallback(
    () => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(numAllow) str += "0123456789"
      if(charAllow) str += "!@#$%^&*(){}[]_-+=`~?"
      for(let i = 1; i<= length;i++){
        let char = Math.floor(Math.random()*str.length + 1)
        pass += str.charAt(char)
      }
      setPassword(pass)
    },
    [length,numAllow,charAllow,setPassword],
  )
  useEffect(() => {
    passwordGenerator()

  }, [length, numAllow,charAllow,passwordGenerator])
  
  return (
    <>
    <div className='text-4xl text-center w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800 py-4'>
    <h1 className='text-4xl text-center text-white my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" 
        value={password}
        className='outline-none w-full py-1 px-3 bg-white'
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
        <button 
        onClick={copyPasswordToClipboard}
        className='px-3 py-0.5 shrink-0 bg-blue-500 text-white'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='fled items-center gap-x-1'>
          <input type="range" 
          min={8}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(element)=>{
            setLength(element.target.value) }}  
            />
            <label >Length: {length}</label>
        </div>
        <div className='fled items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked={numAllow}
          id='numberInput'
          onChange={()=>{
            setNumAllow((prev)=> !prev);
          }} />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='fled items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked={charAllow}
          id='charInput'
          onChange={()=>{
            setCharAllow((prev)=> !prev);
          }} />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
