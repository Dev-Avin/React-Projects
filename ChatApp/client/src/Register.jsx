import axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

const Register = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const {userName : setLoggedInUsername , setId} = useContext(UserContext)
  async function register(ev) {
    ev.preventDefault();
     const {data} = await axios.post('/register', { username, password })
      .then(response => {
        // Handle success (if needed)
        console.log(response.data);
      })
      .catch(error => {
        // Handle error (if needed)
        console.error('Registration failed:', error);
      });
      setLoggedInUsername(username);
      setId(data.id)
  }

  return (
    <div className="bg-blue-50 h-screen flex items-center ">
      <form className="w-64 mx-auto " onSubmit={register}>
        <input
          type="text"
          placeholder='Username'
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          className="block w-full rounded-sm p-2 mb-2 border"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full rounded-sm p-2 mb-2 border"
        />
        <button type="submit" className="block w-full bg-blue-500 text-white rounded-sm p-2">Register</button>
      </form>
    </div>
  );
}

export default Register;
