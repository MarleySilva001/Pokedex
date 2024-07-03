import './App.css'
import { useState, useEffect } from "react"
import {motion} from 'framer-motion'
import styled from "styled-components"
import Pokedex from './assets/components/Pokedex'

const Spinner = styled(motion.div)`
width: 100px;
height: 100px;
border: 14px solid black;
border-top: 14px solid red;
border-radius: 50%;
`

function App() {

  const [Carregando, setCarregando] = useState(true);

  useEffect(() =>{
    const timer = setTimeout(() =>{
      setCarregando(false)
    },2000)
    return() => clearTimeout(timer)
  }, [])

  return (
    <>
    <div className="center">
      {Carregando ? (
      <Spinner
      animate={{rotate: 360}}
      transition={{duration: 1, repeat: Infinity, ease: 'linear'}}
      />
      ):(
        <Pokedex visivel={!Carregando}/>
      )}
    </div>
     
    </> 
  )
}

export default App
