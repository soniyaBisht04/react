import React, { useState } from "react"

const InputItem = (props) => {
    const [value, setValue] = useState(null);
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    return <>
        <input value={value} onChange={handleChange}></input>
        {props?.renderTextBelow(value)}
    </>
}

export default InputItem;