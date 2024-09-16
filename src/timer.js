import React, {memo, useEffect, useState, useLayoutEffect, useRef}  from "react";

const Timer = memo((props) => {
   
    const [counter, setCounter] = useState(0);
    const interval = useRef(null);
    useEffect(() => {
        interval.current = setInterval(() => {
        console.log('inside')
        setCounter((prevCounter) => prevCounter+1)
        
       }, 1000)

       console.log(' create interval id ', interval);

       return () => {
        console.log('unmounted'); 
        clearInterval (interval.current);
       }
    
    }, [])

    const stopTimer = () => {
         console.log('on stop');
         clearInterval(interval.current);
    }  

    return <>

       <span> Current time is  : {counter}</span>
       <br/><br/>
       <button onClick={stopTimer}> stop timer</button>
    </>
})
 
export default Timer; 