import { useContext } from "react";
import { AuthContext } from "../Authconfiguration/Authconfiguration";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../../firebase.config";

const UpdateProfile = () => {
    const {user} = useContext(AuthContext);
    const auth = getAuth(app);

    const handleUpdate = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const upload = e.target.upload.value;

        updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: upload
        })
        .then(()=>{
            alert('updated')
        })
        .catch(error=>{
            console.error(error.message)
        })
    }
    return (
        <div>
            <h1 className="mb-16 text-3xl font-bold">Update Profile</h1>
            <div className="grid items-center grid-cols-4">
                <div className="col-span-2">
                    <img  className="rounded-full h-[300px] w-[300px]" src="https://www.irishtimes.com/resizer/mSBJBg5J4U2lY-PB6qSBn1PM3XE=/1024x0/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/3MS3PYEKJI2N533Z3ZG6VJ2RKU.jpg" alt="" />
                </div>
                <div>
                <div className="  ">
      <div className="flex-col">
        <div className="text-center lg:text-left">
        </div>
        <div className="card shrink-0 w-full max-w-sm">
          <form onSubmit={handleUpdate} className="">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder={user.email}
                className="input input-bordered w-full"
                
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder={user.displayName}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Upload your picture</span>
              </label>
              <input
                type="file"
                name="upload"
                placeholder=""
                className=" "
                
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-blue-600 text-white">Save</button>
            </div>
            
          </form>
          <div className='flex flex-col p-2 gap-2'>
          
          </div>
        </div>
      </div>
    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;