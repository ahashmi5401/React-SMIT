import React from 'react'
import Card  from './Card'

const Cards = ({imagesData}) => {
  return (
    <>
   {imagesData.map((item) => (
          <Card item={item}/>
        ))}
    </>
  )
}

export default Cards