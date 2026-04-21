import {memo} from 'react'



const Child = ({handleClick}) => {
    console.log('hey me rerender hua ');
    
  return (
    <button onClick={handleClick}>Click me I am Child</button>
  )
}


//likhna zaruuri hai wrna useCallback use karne ke baad bhi chil rerender hoga 
export default memo(Child)