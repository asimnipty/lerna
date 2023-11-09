import React, { useState, useEffect } from 'react';

const App = () => {

  const [add, setAdd] = useState(0);

  useEffect (() => {
    console.log( "COMPONENT MOUNT")
  }, []);

  useEffect (() => {
    console.log( "COMPONENT UPDATE")
  }, [add]);

  // useEffect (() => {
  //   return () => {
  //     console.log( "COMPONENT UNMOUNT")
  //   }
  // }, [add])

  return ( 
    <div className='text-3xl text-center p-10'>
      <h1 className='p-10 font-bold text-5xl text-green-800'>{add}</h1>
      <div className=' space-x-2'>
        <button onClick={() => setAdd(add + 1)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-md'>Add</button>
        {/* <button onClick={() => setAdd(0)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-md'>RESET</button> */}
      </div>     
    </div>
  )
}

export default App;