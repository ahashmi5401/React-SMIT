import React from 'react'

//unnesscary rerendering ko khtam karlne ke liye 
//rerender hote hai jab parent element render ho or state change ho tou unecessary rerendering ko rokne ke liye React.memo
//mgr function  aggr as prop use hotu useCallback use hoga kyunke jab comp rerender hga jsx me func 0 se pr banta hai useCallback
//function ko memoize karleta hai phr same output show karta hai


//by using React.memo => i
const Child = React.memo(() => {
    console.log("unnecessary rendering ");
    
  return (
    <div>count</div>
  )
})

export default Child