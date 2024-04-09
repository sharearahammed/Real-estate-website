import { useContext } from "react";
import { AuthContext } from "../Authconfiguration/Authconfiguration";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../../firebase.config";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const auth = getAuth(app);

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const upload = e.target.upload.value;

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: upload,
    })
      .then(() => {
        alert("updated");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Opulent Escapes Update Profile</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <h1 className="mb-16 underline text-center text-3xl font-bold">Update Profile</h1>
      <div className="grid items-center grid-cols-1 lg:grid-cols-4">
        <div className="col-span-2 flex items-center justify-center">
          {
            user && <img
            className="rounded-full h-[300px] w-[300px]"
            src={user.photoURL}
            alt=""
          />
          }
        </div>

              <div className="flex flex-col justify-center card shrink-0 w-96 max-w-sm">
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
                      <span className="label-text font-semibold">
                        Photo URL
                      </span>
                    </label>
                    <input
                      type="text"
                      name="upload"
                      placeholder="Give your profile pic url link"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn bg-blue-600 text-white">Save</button>
                  </div>
                </form>
                <div className="flex flex-col p-2 gap-2"></div>
              </div>
          </div>
      </div>
  );
};

export default UpdateProfile;
