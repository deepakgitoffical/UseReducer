import React, { createContext, useContext } from 'react'
import Card1 from './components/Card1';
// step 1
export const BioContext = createContext();

// custom hook create context
export const useCustomContext = () => {
  const mycontext = useContext(BioContext);
  return mycontext;
}

export const BioProvider = ({children}) => {
  console.log(children,'children context')
  const myData = " Data 1 ";
  const myData2 = " Data 2";
  const myData3 = <Card1 />;

  return (
    <BioContext.Provider value={{ myData, myData2, myData3 }}> 
      {children}
    </BioContext.Provider>
  )
}



// export default BioProvider