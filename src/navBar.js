import React, {memo, forwardRef} from "react";
import Button from "./Button";
const NavBar = forwardRef((props, ref) => {
    // const {externalData} = props;
    // useEffect(() => {
    //     console.log('running')
    // }, [externalData])

    return  <>
    <span>First </span>
    <span>Sec </span>
    <span>third </span>
    <Button>Toggle Theme</Button>
    </>;
})

export default NavBar; 