import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {

     const host = "http://localhost:8080"
     const navigate = useNavigate();

     async function loginUser(name, password) {
          const response = await fetch(`${host}/user/login`, {
               method: "POST",
               headers: {
                    "Content-Type" : "application/json"
               },
               body: JSON.stringify({name, password})
          });
          const json = await response.json();
          json ? navigate("/home") : navigate("/");
     }

     function handleLogin(e) {
          e.preventDefault();
          loginUser(e.target.username.value, e.target.password.value);
     }

     return (
     <div>
          <form action="" onSubmit={handleLogin}>
               <input type="text" name="username" id="username" /><br />
               <input type="password" name="password" id="password" /><br />
               <button type="submit">Login</button>
          </form>
          <Link to='/register'>Register Here</Link>
     </div>
     );
}
