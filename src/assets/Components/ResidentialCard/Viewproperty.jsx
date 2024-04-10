import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Authconfiguration/Authconfiguration";
import { ImCoinDollar, ImLocation2 } from "react-icons/im";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { FaChartArea, FaSquareFull } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Viewproperty = () => {
  const navigate = useNavigate()
  const handleGoBack = () =>{
    navigate(-1)
  }
    const {id} = useParams();
    const {cards} = useContext(AuthContext);
    const [singleCard , setSingleCars] = useState({});
    useEffect(()=>{
        const singleData = cards.find(item=>item.id == id);
        setSingleCars(singleData)
    },[cards,id])

    const {estate_title,image,area,price,status,facilities,description,location,segment_name} = singleCard || {};
    return (
        
        <div className="mt-[60px]">
          <Helmet>
        <title>View Property Details</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
            <h2 className=" mb-6 text-center text-2xl md:text-4xl lg:text-5xl font-bold">{segment_name}</h2>
            <div className="hero min-h-screen">
            
            <div className="hero-content grid grid-cols-1 lg:grid-cols-3">
              <div data-aos="flip-left"  data-aos-duration="3000" className="border p-3 col-span-2">
              <img className="rounded-md" src={image} />
              </div>
              <div className="border p-6">
                <h1 className="text-xl md:text-3xl lg:text-3xl font-semibold">{estate_title}</h1>
                
                <p className="font-light py-6">{description}</p>
                <hr/>
                <div className="p-4 rounded-lg mt-4 mb-4 bg-[#F3F4F9]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-2">
                  <div className="flex items-center gap-3 mb-2 lg:mb-0">
                  <p className="text-[21px]"><FaChartArea /></p>
                  <p>{area}</p>
                  </div>
                  <div className="flex items-center gap-3">
                      <p className="text-[21px]"><MdOutlineNotificationsActive /></p>
                      <p>{status}</p>
                  </div>
                  </div>
          
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                  <div className="mb-2 lg:mb-0 flex items-center gap-3">
                  <p className="text-[21px]"><ImCoinDollar /></p>
                  <p>{price}</p>
                  </div>
                  <div className="flex items-center gap-3">
                      <p className="text-[21px]"><ImLocation2 /></p>
                      <p>{location}</p>
                  </div>
                  </div>
                </div>
                <hr/>
                <p className="mt-8 text-xl mb-3 font-semibold">Facilities:</p>
                {
                    facilities && facilities.map((facilitie,idx)=><p data-aos="fade-left" key={idx}
                    className="text-[#9A9A9A] mb-2 flex items-center gap-3"><FaSquareFull />{facilitie}</p>)
                }
                <button onClick={handleGoBack} className="mt-8 hover:bg-slate-600 block rounded-full bg-gray-900 hover:shadow-slate-600 font-semibold text-white px-6 py-2">
            Go back
          </button>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Viewproperty;