import React from 'react'
import Buttons  from './Buttons'
import Screen  from './Screen'

const Counter = ({count , setCount}) => {
  return (
    <div className="box w-[300px] h-[200px] bg-white flex justify-between flex-col">
            <Screen count = {count} />
            <Buttons count = {count} setCount={setCount}/>
    </div>
  )
}

export default Counter