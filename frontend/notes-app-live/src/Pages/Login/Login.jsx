import { useState } from "react";
import PasswordInput from "../../components/input/Password";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom"; 
import { validateEmail } from "../../utils/helper";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) =>{
    e.preventDefault();

    if(!validateEmail(email)){
      setError("Please Enter Valid Email Address");
      return;
    }
    if(!password){
      setError("Please Enter Password");
    }
    setError("")

    //Login API Call
  }

  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form onSubmit={handleLogin}>
            <h4 className="text-2xl mb-7 text-center font-bold">Login</h4>

            <input
              type="text"
              className="input-box"
              placeholder="Email Address"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
            />
            <PasswordInput
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />

            {error && <p className="text-red-500 text-xs pb-1">{error}</p>}

            <button className="btn-primary" type="submit">Login</button>
            <p className="text-sm text-center mt-4">Not Registered Yet?{" "}
              <Link to="/signUp" className="font-medium text-primary underline">create an Account</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;

