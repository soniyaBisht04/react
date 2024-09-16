import React, {memo, forwardRef, useState} from "react";

const ThirdParent = memo((props, ref) => {
    const {handleChange} = props;
    const [counter, setCounter] = useState(0)
    let startTime = performance.now();
    while(performance.now() - startTime< 500) {

    }
    const increment = () => {
        setCounter((prev) => prev + 1)
        handleChange?.(); 
    }
    return  <>
    I am third parent (slow)
    <br/>
    {counter}
    <br/>
    <button onClick={increment}>Increment</button>
    </>;
})

export default ThirdParent; 