import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {

     const host = "http://localhost:8080"
     const navigate = useNavigate();

     async function registerUser(name, password) {
          const response = await fetch(`${host}/user/register`, {
               method: "POST",
               headers: {
                    "Content-Type" : "application/json"
               },
               body: JSON.stringify({name, password})
          });
          const json = await response.json();
          json ? navigate("/") : navigate("/register");
     }

     function handleRegister(e) {
          e.preventDefault();
          registerUser(e.target.username.value, e.target.password.value);
     }

     return (
     <div>
          <form action="" onSubmit={handleRegister}>
               <input type="text" name="username" id="username" /><br />
               <input type="password" name="password" id="password" /><br />
               <button type="submit">Register</button>
          </form>
          <Link to='/'>Login Here</Link>
     </div>
     );
}