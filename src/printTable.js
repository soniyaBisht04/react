
import React, {memo} from "react";

const generateTable = (number) => {
    const arr = [];
    let startTime = performance.now();
    while(performance.now() - startTime< 500) {

    }
    for(let i=1; i<=10; i++) {
        arr.push(<div>{number*i}</div>)
    }
    return arr;
}


const PrintTable = memo((props) => {

    const {num, myObj} = props;
    const table = generateTable(num);
    return <>{table}
        {myObj.test}
    </>
})

export default PrintTable;