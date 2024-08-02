// import React, { useState } from "react";
// // import { registerWithEmailAndPassword } from "../login/util/auth";

// const RegisterPage = () => {
//   // useState-Hooks für die Verwaltung der Eingabefelder
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");

//   const handleRegister = async (event: React.FormEvent) => {
//     event.preventDefault();

//     console.log("Sign Up button clicked");
//     console.log("Email:", email);
//     console.log("Password:", password);

//     try {
//       await registerWithEmailAndPassword(email, password);
//       console.log("User registered successfully");
//       // Hier könnte man eine Weiterleitung oder eine Erfolgsmeldung hinzufügen
//     } catch (error) {
//       console.error("Registration error:", error);
//     }
//   };

//   return (
//     <form onSubmit={handleRegister}>
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//         required
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//         required
//       />
//       <button type="submit">Sign Up</button>
//     </form>
//   );
// };

// export default RegisterPage;
