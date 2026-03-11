**What Are Pure Component?**
//jinki prop or state bilkul same ho or wo uske uper dependent na ho\
//example agr function render hota hai or uske sath uske child bhi rerender hote hai tou hum usko kaise rokh skte hai usko ko kehte hain pure component

//use of this react.memo prevent from  unecessary rerendering 
const child = react.memo(() => {
    //function content 
})