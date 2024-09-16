import React, {memo, forwardRef, useCallback} from "react";
import ThirdParent from "./thirdParent";

const SecondParent = (props, ref) => {
    const {count} = props;
    const handleChange = useCallback(()=> {
        console.log('handle change from second parent', count );
    }, [count])
    
    return  <>
    I am second parent
    <br/>
    <ThirdParent handleChange={handleChange}></ThirdParent>
    </>;
}

export default SecondParent; 