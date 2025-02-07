import React from 'react'
import './App.css'
import { BioProvider } from './Index';

import CompA from './CompA'
import CompB from './CompB';
// import CompA  from './CompA'
const App = () => {
  return (
    <>
      <h3 style={{ textAlign: 'center' }}> Example of Custom Context Hook</h3>
      <BioProvider>
        <CompA />
        <CompB />
      </BioProvider>
    </>

  )

}

export default App