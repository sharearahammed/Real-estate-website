import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../Authconfiguration/Authconfiguration';
import { useContext, useState } from 'react';
import { FaGithub } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const Login = () => {

    const { signUpUser,setUser,GoogleSignIn,GitHubSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword ,  setShowPassword] = useState(false);

  const handleGoogleSignIn = () =>{
    GoogleSignIn()
    .then(result =>{
        const logedInUser = result.user;
        setUser(logedInUser)
        navigate("/");
    })
    .catch(error=>{
        console.error("error", error.message)
    })
  }

  const handleGithubSignIn = () =>{
    GitHubSignIn()
    .then(result =>{
        const logedInUser = result.user;
        setUser(logedInUser)
        navigate("/");
    })
    .catch(error=>{
        console.error("error", error.message)
    })
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // Login user
    signUpUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.error(error.message);
        toast.error("The password that you entered is Incorrect ")
      });
  };


    return (
        <div className="mt-16 lg:mt-16 hero min-h-screen ">
          <Helmet>
        <title>Opulent Escapes Login Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
            <ToastContainer />
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">Please Login now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
            <div className="relative">
              <label className="text-sm mb-2 block">Password</label>
              <input className="  bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" 
              type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" required />
                <span className="absolute top-11 right-2" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </span>
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p>
              Do not have an account? Please{" "}
              <Link
                to={"/register"}
                className="hover:underline text-blue-600 font-semibold"
              >
                Signup
              </Link>
            </p>
            <hr />
            <h3 className="text-2xl text-center font-semibold">Or</h3>
            
          </form>
          <div className='flex flex-col p-2 gap-2'>
          <button onClick={handleGoogleSignIn} className="btn">
            <p className='text-xl flex items-center gap-3'><FaGoogle />
              Google</p>
            </button>
            <button onClick={handleGithubSignIn} className="btn">
            <p className='text-xl flex items-center gap-3'><FaGithub />
            Github</p>
            
            </button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Login;