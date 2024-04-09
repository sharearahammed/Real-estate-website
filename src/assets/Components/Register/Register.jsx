import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Authconfiguration/Authconfiguration";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";

const Register = () => {

    const {createUser} = useContext(AuthContext)
    const [error , setError] = useState('');
    const [showPassword ,  setShowPassword] = useState(false);

    const handleSignup = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // const cpassword = e.target.cpassword.value;
        const accepcted = e.target.terms.checked;
        // const upload = e.target.upload.value;
        console.log(name,email,password,accepcted)

        // reset error
        setError('')
        // reset success

        // validation
        if(password.length < 6){
            setError('Password should be 6 charecters or longer')
            return;
        }
        const pattern = /^(?=.*[A-Z])(?=.*[a-z]).+$/;
        if(!pattern.test(password)){
            setError('Password must contain at least one uppercase and one lowercase letter.')
        }
        // if(password !== cpassword){
        //     setError('Passwords do not match')
        //     return;
        // }
        else if(!accepcted){
            setError('Please accepct our terms and conditions!')
            return;
        }

        // Create user
        createUser(email,password)
        .then(result =>{
            console.log(result.user)
            toast.success("User Create Successfully")
            
            // Update profile
            updateProfile(result.user,{
              displayName: name,
              // photoURL: upload
          })
          .then(()=> console.log('profile updated'))
          .catch()

        })
        .catch(error=>{
            console.error(error.meggase)
            setError(error.meggase)
        })
    }

    return (
        <div className="flex flex-col justify-center font-[sans-serif] text-[#333] sm:h-screen p-4">
          <Helmet>
        <title>Opulent Escapes Regester Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="max-w-md w-full mx-auto border border-gray-300 rounded-md p-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold">Please Signup</h1>
        </div>
        <form onSubmit={handleSignup}>
          <div className="space-y-6">
            <div>
              <label className="text-sm mb-2 block">Name</label>
              <input name="name" type="text" className="bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter name" />
            </div>
            <div>
              <label className="text-sm mb-2 block">Email</label>
              <input name="email" type="text" className="bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter email" />
            </div>
            <div className="relative">
              <label className="text-sm mb-2 block">Password</label>
              <input className="  bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" 
              type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" required />
                <span className="absolute top-11 right-2" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </span>
              </div>
            {/* <div>
              <label className="text-sm mb-2 block">Confirm Password</label>
              <input name="cpassword" type="password" className="bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter confirm password" />
            </div> */}
            <div className="flex items-center">
              <input id="remember-me" name="terms" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label className="ml-3 block text-sm">
                I accept the <a href="javascript:void(0);" className="text-blue-600 font-semibold hover:underline ml-1">Terms and Conditions</a>
              </label>
            </div>
          </div>
          <div className="!mt-10">
            <button className="w-full py-3 px-4 text-sm font-semibold rounded text-white bg-blue-500 hover:bg-blue-600 focus:outline-none">
              Create an account
            </button>
          </div>
        </form>
        <p className="text-sm mt-6 text-center">Already have an account? <Link to={'/login'}><a href="javascript:void(0);" className="text-blue-600 font-semibold hover:underline ml-1">Signin here</a></Link></p>
        
        {
            error && <p className="text-red-600">{error}</p>
        }
      </div>
      <ToastContainer />
    </div>
    );
};

export default Register;