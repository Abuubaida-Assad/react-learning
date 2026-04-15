// import React from "react";
import "./index.css"
import { useState } from "react";





// function Grandchild(props) {
//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <h2>{props.age}</h2>
//     </div>
//   );
// }


// function Child(props) {
//   return (
//     <div>
//       <Grandchild name={props.name} age={props.age} />
//     </div>
//   );
// }


// function App() {
//   const name = "Assad";
//   const age = 19;

//   return (
//     <div>
//       <h2>Hello World</h2>
//       <Child name={name} age={age} />
//     </div>
//   );
// }

// function App(){
//   const name = "Assad";
//   const age = 19;
//   return(
//     <div>
//       <h2>Hello World</h2>
//       <Child name={name} age={age} />
//     </div>
//   );
// }

// function Child(props){
//   return(
//     <div>
//       <Grandchild name={props.name} age={props.age} />
//     </div>
//   );
// }

// function Grandchild(props){
//   return(
//     <div>
//       <h2>{props.name}</h2>
//       <h2>{props.age}</h2>
//     </div>
//   );
// }


// export default App;


// import React, { useState } from "react";

// export default function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div style={{ textAlign: "center", marginTop: "30px" }}>
//       <h1>Count: {count}</h1>

//       <button onClick={() => 
//         setCount(count + 1)} >Increment</button>
//       <button onClick={() => 
//         setCount(count - 1)} style={{ margin: "0 5px" }}>
//         Decrement
//       </button>
//       <button onClick={() => 
//         setCount(0)}>Reset</button>
//     </div>
//   );
// }


// function App(){
//   const [isTextVisible, setTextVisible] = useState(false);
//   const toggleVisibility = () =>{
//     setTextVisible(!isTextVisible)
//   };
//   return;
//   <>
//     <div className="h-screen flex flex-col justify-center items-center">
//   <button className="px-5 py-2 bg-amber-100 rounded-2xl"></button>
//     </div>
//   </>
// }
// export default App;


function App() {
  const [isTextVisible, setTextVisible] = useState(false);

  const toggleVisibility = () => {
    setTextVisible(!isTextVisible);
  };

  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <button
          onClick={toggleVisibility}
          className="px-5 py-2 bg-amber-100 rounded-2xl"
        >
          Toggle Text
        </button>

        {isTextVisible && <p className="mt-4">Hello Tailwind 🚀</p>}
      </div>
    </>
  );
}
export default App;