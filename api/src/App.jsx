// import React from 'react'

// const App = () => {

//   const getData = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//   }
//   return (
//     <div>
//       <button onClick={getData}>get data</button>
//     </div>
//   )
// }

// export default App

// using axios

import React from 'react'
import axios from 'axios'

const App = () => {
  const getData = async () =>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(response);
  }
  return (
    <div>
      <button onClick={getData}>get data</button>
    </div>
  )
}

export default App

