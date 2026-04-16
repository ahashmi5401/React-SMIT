import React, { useRef } from 'react'

// useRef ek aisa hook hai jo aapko ek "Mutable Object" deta hai jo poore component ke lifecycle mein persist (barkaraar) rehta 
// hai. Iska sabse bara feature ye hai:
// "Jab useRef ki value change hoti hai, toh component RE-RENDER nahi hota."
// Imagine karein ek aisi memory pocket jo aapko cheezein yaad rakhne mein madad kare, lekin screen par koi hal-chal na machaye.


const App = () => {
  const inputEl = useRef(null)


  //React mein hum normally document.getElementById use nahi karte. Agar aapko kisi HTML element (jaise input, div, ya button) 
  // ko direct control karna ho, toh useRef kaam aata hai.
  const onButtonClick = () => {
    inputEl.current.focus()
  }

  return (
   <>
   <input type="text" ref={inputEl}/>
   <button onClick={onButtonClick}>focus on Input</button>
   </>
  )
}

export default App