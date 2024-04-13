import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div className="mt-[69px]">
      <Helmet>
        <title>Opulent Escapes About</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/61xDmfr/francesca-tosolini-t-Hk-JAMc-O3-QE-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="lg:px-[350px] lg:py-[150px]">
        <div className=" border-4 px-16 py-8  text-center text-neutral-content">
          <div className="max-w-md" data-aos="fade-right"
          data-aos-duration="2000">
            <h1 className="text-left mb-5 text-6xl font-bold">About Us</h1>
            <p className="mb-5 text-left">
            Welcome to Opulent Escapes, where luxury meets community. Located in Dhaka,Bangladesh, our mission is to redefine modern living through innovation and sustainability. With a focus on exceptional service, our homes offer comfort and convenience, inviting you to experience the joy of coming home.
            </p>
          </div>
        </div>
        </div>
      </div>
{/* one */}
      <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="border rounded-xl p-8 lg:p-16 mt-6 lg:mt-24  max-w-4xl mx-auto grid lg:grid-cols-3 items-center justify-center">
        <div className="lg:col-span-2"><img className="lg:h-[500px] lg:w-[400px] rounded-lg" src="https://i.ibb.co/G3ZS2qw/bernard-hermant-CLKGGw-IBTa-Y-unsplash.jpg" alt="" /></div>
        <div>
            <p>
            <span className="text-4xl font-semibold">At Opulent Escapes</span>, we believe in creating more than just homes; we strive to cultivate vibrant communities where residents can thrive. Our dedicated team is committed to providing exceptional service and fostering a sense of belonging for all residents. Whether you are seeking a dynamic urban lifestyle or a tranquil suburban retreat, our diverse range of properties offers something for everyone.
            </p>
        </div>
      </div>
      {/* two */}
      <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="border rounded-xl p-8 lg:p-16 mt-6 lg:mt-24  max-w-4xl mx-auto lg:grid grid-cols-3 items-center justify-center">
        <div className="lg:col-span-2"><img className="lg:h-[500px] lg:w-[400px] rounded-lg" src="https://i.ibb.co/MB9fkNH/ryan-parker-ucn-ZANGmyx-M-unsplash.jpg" alt="" /></div>
        <div>
            <p>
            <span className="text-4xl font-semibold">Experience the difference of living in a Opulent Escapes</span> home, where every moment is infused with luxury, comfort, and convenience. Join us as we embark on a journey to redefine modern residential living and create spaces where memories are made and dreams are realized.
            </p>
        </div>
      </div>
      {/* three */}
      <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="border rounded-xl p-8 lg:p-16 mt-6 lg:mt-24  max-w-4xl mx-auto grid lg:grid-cols-3 items-center justify-center">
        <div className="lg:col-span-2"><img className="lg:h-[500px] lg:w-[400px] rounded-lg" src="https://i.ibb.co/D4n4jqc/mika-baumeister-PL7-K02i4s9g-unsplash.jpg" alt="" /></div>
        <div>
            <p>
            <span className="text-4xl font-semibold">Opulent Escapes</span> is more than just a place to live; it is a lifestyle. Located in the heart of [Location], our community offers an unparalleled residential experience characterized by luxury, convenience, and community. With a commitment to excellence, we strive to provide our residents with a home that exceeds expectations and reflects their unique style and personality.
            </p>
        </div>
      </div>
      {/* four */}
      <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="border rounded-xl p-8 lg:p-16 mt-6 lg:mt-24 max-w-4xl mx-auto grid lg:grid-cols-3 items-center justify-center">
        <div className="lg:col-span-2"><img className="lg:h-[500px] lg:w-[400px] rounded-lg" src="https://i.ibb.co/HP3wXYj/ivan-ramirez-2-Vh-VKr7-Qbv-E-unsplash.jpg" alt="" /></div>
        <div>
            <p>
            <span className="text-4xl font-semibold">Our team at Opulent Escapes</span> is dedicated to creating a welcoming and inclusive environment where residents can thrive. From our state-of-the-art amenities to our meticulously designed residences, every aspect of our community is crafted with the utmost attention to detail and quality.
            </p>
        </div>
      </div>
      {/* five */}
      <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="border rounded-xl p-8 lg:p-16 mt-6 lg:mt-24  max-w-4xl mx-auto grid lg:grid-cols-3 items-center justify-center">
        <div className="lg:col-span-2"><img className="lg:h-[500px] lg:w-[400px] rounded-lg" src="https://i.ibb.co/94zB6w2/armin-djuhic-mc-L2f-J74-GY-unsplash.jpg" alt="" /></div>
        <div>
            <p>
            <span className="text-4xl font-semibold">Whether you are</span> looking for a vibrant urban lifestyle or a serene suburban retreat, [Residential Community Name] has the perfect home for you. Join us and discover the difference of living in a community that prioritizes your comfort, well-being, and happiness. Welcome home to [Residential Community Name], where luxury meets lifestyle
            </p>
        </div>
      </div>
    </div>
  );
};

export default About;
