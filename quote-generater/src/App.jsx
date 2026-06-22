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


// import { useState } from "react";
// import axios from "axios";

// function AgeGenerator() {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");

//   const ageFunction = async () => {
//     try {
//       const response = await axios.get(`https://api.agify.io?name=${name}`);

//       setAge(response.data.age);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const clearName = () => {
//     setName("");
//     setAge("");
//   };

//   return (
//     <main className="quote-page">
//       <h1>Age Generator</h1>

//       <input
//         type="text"
//         placeholder="Enter a name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <button onClick={ageFunction}>Predict Age</button>
//       <button onClick={clearName}>Clear</button>
//       <p>The estimated age is: {age}</p>
//     </main>
//   );
// }

// export default AgeGenerator;


import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");

  const getGithubUser = () => {
    setUser(username);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>GitHub Activity Graph</h1>

      <input
        type="text"
        placeholder="Enter GitHub Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={getGithubUser}>
        Show Graph
      </button>

      {user && (
        <div style={{ marginTop: "20px" }}>
          <h2>{user}</h2>

          <img
            src={`https://github-readme-activity-graph.vercel.app/graph?username=${user}`}
            alt="GitHub Activity Graph"
            style={{
              width: "100%",
              maxWidth: "900px",
            }}
          />
        </div>
      )}
    </div>
  );
}




export default App;

