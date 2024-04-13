import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Authconfiguration/Authconfiguration";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  const handleGoBack = () =>{
    navigate(-1)
  }
  <Helmet>
        <title>Opulent Escapes User Profile</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
  return (
    <div className="mt-20">
      
      <h1 className="text-3xl font-semibold underline text-center">Profile</h1>
      <div className="p-4 max-w-2xl mx- sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
        <div className="rounded-t-lg h-32 overflow-hidden">
          <img
            className="object-cover object-top w-full"
            src="https://i.ibb.co/bgyZgcw/How-to-Add-a-Profile-Photo-on-Linked-In-1024x684.jpg"
            alt=""
          />
        </div>
        <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
          {
            user && 
            <img
            className=" object-cover object-center h-32"
            src={user.photoURL}
            alt=""
          />
          }
        </div>
        <div className="break-all text-center mt-2">
          {user && <h2 className="mb-4 text-xl font-semibold">Name: {user.displayName}</h2>}
          {user && <p className="mb-4 text-gray-500">Email: {user.email}</p>}
          {user && <p className="mb-4 text-gray-500">photoURL Link : {user.photoURL}</p>}
        </div>
        <div className="p-4 border-t mx-8 mt-2">
          <button onClick={handleGoBack} className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
