import React from 'react'

const Button = ({title , handlePage}) => {
  return (
    <Button
    className='p-2 bg-black/50 rounded font-bold cursor-pointer h-[40px] w-[70px]'
    onClick={() => {
        handlePage(title)
    }}
    >{title}</Button>
  )
}

export default Button