import React, {memo, forwardRef} from "react";

const Input = forwardRef((props, ref) => {
    // const {externalData} = props;
    // useEffect(() => {
    //     console.log('running')
    // }, [externalData])

    console.log('input compo props ', props)
    return  <input ref={ref} type="text"/>;
})

export default Input; 