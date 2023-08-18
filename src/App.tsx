import Qr from './qrcode'
import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState('');

  return (
    <>
    <input type='string'
    placeholder='Enter Value' 
    onChange={(e) => {
      setValue(e.target.value)
    }}/>
    <Qr size={500} value={value}/>
    </>
  )
}

export default App