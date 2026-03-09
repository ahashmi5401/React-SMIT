import React from 'react'

const Buttons = ({setCount , count}) => {
  return (
    <div className="btns mb-6 text-center flex justify-evenly">
          <button className='border-2 p-3 rounded-2xl cursor-pointer' onClick={() => setCount( count - 1 )}>SUB</button>
          <button className='border-2 p-3 rounded-2xl cursor-pointer' onClick= {() => setCount( count + 1)}>ADD</button>
    </div>
  )
}

export default Buttons