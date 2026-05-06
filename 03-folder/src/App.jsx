// import React, {useState} from 'react'

// const App = () => {
//     const [num, setNum] = useState(0)
//     const increaseNum = () =>{
//         setNum(num+1)
        
//     }
//     const decreaseNum = () =>{
//         setNum(num-1)
//     }
//   return (
//     <div className='flex justify-center items-center'>
//       <h1 className='text-5xl bg-amber-50'>{num}</h1>
//       <div className='gap-20'>
//         <button onClick={increaseNum} className='text-5xl bg-blue-600 text-white gap-20'>increase</button>
//       <button onClick={decreaseNum} className='text-5xl bg-blue-600 text-white'>decrease</button>
//       </div>
//     </div>
//   )
// }

// export default App



// const App = () => {
//   const [num, setNum] = useState([10, 20, 30]);

//   const btnClicked = () => {
//     const newNum = [...num]; // copy old array
//     newNum.push(99);         // update copy
//     setNum(newNum);          // set new state
//   };

//   return (
//     <div className="p-10">
//       <h1 className="text-2xl">{num.join(", ")}</h1>
//       <button
//         onClick={btnClicked}
//         className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
//       >
//         Click
//       </button>
//     </div>
//   );
// };

// export default App;
import AxiosCleanUp from "./class-8";

function App() {
  return (
    <div>
      <AxiosCleanUp />
    </div>
  );
}

export default App;





