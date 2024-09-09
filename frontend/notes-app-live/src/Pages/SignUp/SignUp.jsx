import { useState } from "react";
import PasswordInput from "../../components/input/Password";
import { Link } from "react-router-dom"; 
import { validateEmail } from "../../utils/helper";

const SignUp = () => {

  const [name,setName]= useState("");
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  const [error,setError]= useState(null);

  const handleSignUp = async(e)=>{
    e.preventDefault();

    if(!name){
      setError("Please enter your name");
      return;
    }
    if(!validateEmail(email)){
      setError("Please Enter Valid Email Address");
      return;
    }
    if(!password){
      setError("Please Enter Password");
      return;
    }
    setError('')
 
    //Sign Up  API Call
  }
  return (
    <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form onSubmit={handleSignUp}>
            <h4 className="text-2xl mb-7 text-center font-bold">SignUp</h4>
            <input
              type="text"
              className="input-box"
              placeholder="Name"
              value={name}
              onChange={(e)=> setName(e.target.value)}
            />
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

            <button className="btn-primary" type="submit">Sign Up</button>
            <p className="text-sm text-center mt-4">Already have an account?{" "}
              <Link to="/login" className="font-medium text-primary underline">Login</Link>
            </p>

          </form>
        </div>
      </div>
  )
}

export default SignUp
