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
  return (
    <div>
      <Helmet>
        <title>Opulent Escapes User Profile</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
        <div className="rounded-t-lg h-32 overflow-hidden">
          <img
            className="object-cover object-top w-full"
            src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
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
        <div className="text-center mt-2">
          {user && <h2 className="mb-4 text-xl font-semibold">Name: {user.displayName}</h2>}
          {user && <p className="mb-4 text-gray-500">Email: {user.email}</p>}
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
