import React, {memo, forwardRef} from "react";
import Text from './text';

const Heading = (props) => {
    const {headingText} = props;
    // useEffect(() => {
    //     console.log('running')
    // }, [externalData])

    console.log('input compo props ', props)
    return  <>
    Hey am heading 
    <Text externalData={headingText}>I am text com</Text>
    </>;
}

export default Heading; 