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


// import { useState } from "react";

// function App() {
//   const [username, setUsername] = useState("");
//   const [user, setUser] = useState("");

//   const getGithubUser = () => {
//     setUser(username);
//   };

//   return (
//     <div style={{ textAlign: "center", padding: "20px" }}>
//       <h1>GitHub Activity Graph</h1>

//       <input
//         type="text"
//         placeholder="Enter GitHub Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />

//       <button onClick={getGithubUser}>
//         Show Graph
//       </button>

//       {user && (
//         <div style={{ marginTop: "20px" }}>
//           <h2>{user}</h2>

//           <img
//             src={`https://github-readme-activity-graph.vercel.app/graph?username=${user}`}
//             alt="GitHub Activity Graph"
//             style={{
//               width: "100%",
//               maxWidth: "900px",
//             }}
//           />
//         </div>
//       )}
//     </div>
//   );
// }




// export default App;





// import React from "react";
// import { useForm } from "react-hook-form";

// function App() {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();

//   const password = watch("password");

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="flex flex-col gap-3 w-80"
//       >
//         <h1 className="text-2xl font-bold">Registration Form</h1>

//         <input
//           type="text"
//           placeholder="Enter Name"
//           className="border p-2 rounded"
//           {...register("name", {
//             required: "Name field is empty",
//           })}
//         />
//         <p className="text-red-500">{errors.name?.message}</p>

//         <input
//           type="number"
//           placeholder="Enter Age"
//           className="border p-2 rounded"
//           {...register("age", {
//             required: "Age field is empty",
//             min: {
//               value: 18,
//               message: "Age must be greater than 18",
//             },
//           })}
//         />
//         <p className="text-red-500">{errors.age?.message}</p>

//         <input
//           type="email"
//           placeholder="Enter Email"
//           className="border p-2 rounded"
//           {...register("email", {
//             required: "Email field is empty",
//           })}
//         />
//         <p className="text-red-500">{errors.email?.message}</p>

//         <input
//           type="password"
//           placeholder="Enter Password"
//           className="border p-2 rounded"
//           {...register("password", {
//             required: "Password field is empty",
//             minLength: {
//               value: 6,
//               message: "Password must be at least 6 characters",
//             },
//           })}
//         />
//         <p className="text-red-500">{errors.password?.message}</p>

//         <input
//           type="password"
//           placeholder="Confirm Password"
//           className="border p-2 rounded"
//           {...register("confirmPassword", {
//             required: "Confirm Password field is empty",
//             validate: (value) =>
//               value === password || "Passwords do not match",
//           })}
//         />
//         <p className="text-red-500">{errors.confirmPassword?.message}</p>

//         <button
//           type="submit"
//           className="bg-blue-500 text-white p-2 rounded"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default App;



import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Hanzala",
      age: 24,
      email: "hanzala@gmail.com",
      password: "hanzala123",
    },
    {
      id: 2,
      name: "Abhishek",
      age: 22,
      email: "abhishek@gmail.com",
      password: "abhishek123",
    },
  ]);

  const addUser = (newUser) => {
    setUsers([...users, { id: Date.now(), ...newUser }]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Management</h1>

      <UserForm addUser={addUser} />

      <br />

      <UserTable users={users} />
      
    </div>
  );


}


export default App;