/* eslint-disable react/prop-types */

import { FaChartArea } from "react-icons/fa";
import { ImCoinDollar, ImLocation2 } from "react-icons/im";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { Link } from "react-router-dom";

const ResidentialCard = ({card}) => {
    const {image,estate_title,view_property_button,segment_name,price,status,area,location,id} = card;
    return (
        <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl lg:w-96 transition-all duration-700 lg:hover:scale-105 lg:hover:border-blue-500 hover:shadow-2xl border">
  <div
    className="relative lg:h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
    <img className="h-[300px] w-[500px]"
      src={image}
      alt={segment_name} />
  </div>
  <div className="p-6">
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-[#BC986B]">
      {estate_title}
    </h5>
    <div className="mt-6 mb-4">
        <div className="grid grid-cols-2 mb-2">
        <div className="flex items-center gap-3">
        <p><FaChartArea /></p>
        <p>{area}</p>
        </div>
        <div className="flex items-center gap-3">
            <p><MdOutlineNotificationsActive /></p>
            <p>{status}</p>
        </div>
        </div>

        <div className="grid grid-cols-2">
        <div className="flex items-center gap-3">
        <p><ImCoinDollar /></p>
        <p>{price}</p>
        </div>
        <div className="flex items-center gap-3">
            <p><ImLocation2 /></p>
            <p>{location}</p>
        </div>
        </div>
    </div>
  </div>
  <div className="p-6 pt-0">
    <Link to={`/viewproperty/${id}`}>
    <button
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-[#BC986B] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 hover:bg-secondary-content hover:text-[#31323C] hover:border hover:border-[#31323C] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button">
      {view_property_button}
    </button>
    </Link>
  </div>
</div>
    );
};

export default ResidentialCard;