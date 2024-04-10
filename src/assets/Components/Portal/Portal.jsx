const Portal = () => {
  return (
    <div className="mt-32">
      <div className="border bg-[#BC986B] text-white p-8 text-3xl font-bold mb-16">
        <h1 className="text-center">Opulent Escapes Portal</h1>
      </div>

      <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-600 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Announcements
            </h3>
            <p className="my-4">
            Stay informed about the latest community events, important announcements, and maintenance schedules directly from the management team.
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center ">
            <img
              className="rounded-full w-20 h-20"
              src="https://i.ibb.co/KF9gcWD/istockphoto-1344512181-612x612.jpg"
              alt=""
            />
            <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
              <div className="text-sm text-gray-500 dark:text-gray-400 ">
                <li>Stay updated on community events and important announcements.</li>
                <li>Receive notifications about maintenance schedules and policy changes.</li>
              </div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg dark:bg-gray-600 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Amenities Booking
            </h3>
            <p className="my-4">
            Residents can conveniently reserve community amenities such as the clubhouse, pool area, fitness center, or common spaces for private events or gatherings. 
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center ">
            <img
              className="rounded-full w-20 h-20"
              src="https://i.ibb.co/mNn7zGN/istockphoto-1319058954-612x612.jpg"
              alt=""
            />
            <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <li>Reserve community facilities such as the clubhouse, pool, and common areas.</li>
                <li>Schedule private events and gatherings with ease.</li>
              </div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e dark:bg-gray-600 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Maintenance Requests
            </h3>
            <p className="my-4">
            Report any maintenance issues or repair requests through the Resident Portal.
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center ">
            <img
              className="rounded-full w-20 h-20"
              src="https://i.ibb.co/3BGXrqr/istockphoto-1050821856-612x612.jpg"
              alt=""
            />
            <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <li>Report maintenance issues or repair requests online.</li>
                <li>Provide details about the problem and schedule repair appointments.</li>
              </div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-se-lg dark:bg-gray-600 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Community Forums
            </h3>
            <p className="my-4">
            Engage with fellow residents through interactive community forums where residents can share ideas, ask questions, and participate in discussions on topics relevant to the community.
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center ">
            <img
              className="rounded-full w-20 h-20"
              src="https://i.ibb.co/CHQ0FTT/images.png"
              alt=""
            />
            <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <li>Engage with fellow residents in discussions and share ideas.</li>
                <li>Participate in conversations about neighborhood initiatives and local services.</li>
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Portal;
