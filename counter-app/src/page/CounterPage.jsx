import React from 'react'
import { useState } from 'react'
import Counter from '../components/Counter'

const CounterPage = () => {
   const  [count , setCount] = useState(0)
  if(count <= -1) {
            setCount(0)
    }
  return (
    <div className='w-full h-screen bg-amber-100 flex justify-center items-center'>
      <Counter count = {count} setCount={setCount} />
    </div>
  )
}

export default CounterPage