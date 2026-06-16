// import axios from "axios";
// import { useState, useEffect } from "react";

// const AxiosClass = () => {
//   const [quote, setQuote] = useState("");

//   const apiCallFunc = async () => {
//     try {
//       const data = await axios.get(
//         "https://dummyjson.com/quotes/random"
//       );

//       setQuote(data.data.quote);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   console.log("hi");

//   useEffect(() => {
//     apiCallFunc();
//   }, []);

//   return (
//     <div className="flex flex-col text-center items-center justify-center">
//       <div>
//         <button onClick={apiCallFunc}>
//           Generate Quote
//         </button>

//         <h1>{quote}</h1>
//       </div>
//     </div>
//   );
// };

// export default AxiosClass;


import { useState } from "react";
import axios from "axios";

function AgeGenerator() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const ageFunction = async () => {
    try {
      const response = await axios.get(`https://api.agify.io?name=${name}`);

      setAge(response.data.age);
    } catch (error) {
      console.log(error);
    }
  };

  const clearName = () => {
    setName("");
    setAge("");
  };

  return (
    <main className="quote-page">
      <h1>Age Generator</h1>

      <input
        type="text"
        placeholder="Enter a name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={ageFunction}>Predict Age</button>
      <button onClick={clearName}>Clear</button>
      <p>The estimated age is: {age}</p>
    </main>
  );
}

export default AgeGenerator;