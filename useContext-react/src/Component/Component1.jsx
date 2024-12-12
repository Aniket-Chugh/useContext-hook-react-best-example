import React from 'react'
import { counterContext } from '../createCont/ContextAPI';
import { useContext } from 'react'


const Component1 = () => {
    const value = useContext(counterContext);
  return (
    <div>
      {value.count}
    </div>
  )
}

export default Component1
