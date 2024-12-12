import React , { useContext } from 'react'
import { counterContext } from '../createCont/ContextAPI'
import Component1 from './Component1'

const Button = () => {
    const value = useContext(counterContext);
  return (
    <div>
      <button onClick={
        ()=>{
value.setCount((count)=>(count+1));
        }
      }><span><Component1/></span>i am a button</button>
    </div>
  )
}

export default Button
