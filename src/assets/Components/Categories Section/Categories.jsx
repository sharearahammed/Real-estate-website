import { FaCircle } from "react-icons/fa";

const Categories = () => {
  return (
    <div className="mt-16">
        <div>
        <h1 className="lg:ml-28 text-[#BC986B] flex items-center gap-2  "><FaCircle /><span className="text-xl lg:text-5xl font-semibold text-black underline">Categories</span></h1>
        </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 lg:h-96">
        <div className="lg:col-span-3 relative flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 mt-24">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://i.ibb.co/hVFKH0P/single-fam.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
          <h3 className="z-10 mt-3 text-3xl font-bold text-white">
            {" "}
            Single-family homes
          </h3>
          <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
            8 Properties
          </div>
        </div>

        <div className="lg:ml-24 lg:col-span-2 relative flex flex-col justify-center it overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mt-24">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://i.ibb.co/m8HdB1z/townhouses.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
          <h3 className="z-10 mt-3 text-3xl font-bold text-white">
            Townhouses
          </h3>
          <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
            7 Properties
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 lg:h-96">
        <div className="relative flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 mt-24">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://i.ibb.co/whCpZQ2/apartments.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
          <h3 className="z-10 mt-3 text-3xl font-bold text-white">
            Apartments
          </h3>
          <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
            10 Properties
          </div>
        </div>

        <div className="relative flex flex-col justify-center it overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mt-24">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://i.ibb.co/HrYpqZ6/studenthousing.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
          <h3 className="z-10 mt-3 text-3xl font-bold text-white">
            student housing
          </h3>
          <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
            5 Properties
          </div>
        </div>
        <div className="relative flex flex-col justify-center it overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mt-24">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://i.ibb.co/t47z2C5/senior-living-communities.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
          <h3 className="z-10 mt-3 text-3xl font-bold text-white">senior living communities,</h3>
          <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
            6 Properties
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
