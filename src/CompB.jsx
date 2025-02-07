// import React, { useContext } from 'react'
import { useCustomContext } from './Index'
const CompB = () => {
    const data = useCustomContext();
    // console.log(data, 'comp b');

    return (
        <div>
            <h5>Comp B</h5>
            {/* <p>{data.myData}</p>
            <p>{data.myData2}</p> */}
            <div>{data.myData3}</div>
        </div>
    )
}

export default CompB