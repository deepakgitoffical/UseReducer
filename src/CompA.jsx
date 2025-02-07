// import React, { useContext } from 'react'
import { useCustomContext } from './Index'

const CompA = () => {
  const data = useCustomContext();

  console.log(data);

  return (
    <div>
      <h4>This is Comp A</h4>
      {/* <h3>{data.myData}</h3> */}
      <div>{data.myData3}</div>
    </div>
  )
}

export default CompA