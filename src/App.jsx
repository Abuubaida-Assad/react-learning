// import React from "react";





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

function App(){
  const name = "Assad";
  const age = 19;
  return(
    <div>
      <h2>Hello World</h2>
      <Child name={name} age={age} />
    </div>
  );
}

function Child(props){
  return(
    <div>
      <Grandchild name={props.name} age={props.age} />
    </div>
  );
}

function Grandchild(props){
  return(
    <div>
      <h2>{props.name}</h2>
      <h2>{props.age}</h2>
    </div>
  );
}


export default App;


