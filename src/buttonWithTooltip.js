import React from "react";

const ButtonWithToolTip = (props) => {
    const {tooltipContent, children} = props;
     const handleFn = () => {
        clickHandler();
     }

    return <>
    <button onClick={handleFn}>{children}</button>
     <ToolTip></ToolTip>
    </>;
}

export default ButtonWithToolTip; 