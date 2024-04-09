import { Helmet } from "react-helmet-async";

const Contact = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mb-16 max-w-7xl mx-auto">
      <Helmet>
        <title>Opulent Escapes Contact</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <figure>
        <img
          className="h-[750px] w-[600px]"
          src="https://i.ibb.co/c3d0470/josh-wilburne-Tc-BSi3q-Hn80-unsplash.jpg"
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-3xl card-title">Get in Touch</h2>
        <p>Get in touch with us at Opulent Escapes for any questions,<br/> inquiries, or to schedule a visit. Our friendly team is dedicated to assisting<br/> you in finding your ideal home. Whether you prefer reaching out by phone,<br/> email, or in person, we are here to help. Connect with us today and discover<br/> the unmatched living experience awaiting you at our community.</p>

        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="bg-base-200">
        <td>Email:</td>
        <td>sharearahammed@gmail.com</td>
      </tr>
      {/* row 2 */}
      <tr className="bg-base-200">
        
        <td>Phone:</td>
        <td>01876523323</td>
      </tr>
      {/* row 3 */}
      <tr className="bg-base-200">
        <td>Address:</td>
        <td>Dhaka,Bangladesh</td>
      </tr>
      {/* row 4 */}
      <tr className="bg-base-200">
        <td>Office Hours:</td>
        <td>9:00 AM to 5:00 PM</td>
      </tr>
    </tbody>
  </table>
</div>
<div className="flex flex-col">
    <h1 className="mt-5 mb-9 text-2xl font-bold">Give FeedBack</h1>
    <div className="mb-5">
    <label className="input input-bordered flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
    </div>
    <div>
  <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>
  </div>

</div>
<div className="card-actions justify-end">
      <button className="btn bg-[#BC986B] text-white">Send</button>
    </div>
    
      </div>
    </div>
    );
};

export default Contact;