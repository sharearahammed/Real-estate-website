import Banner from "../Banner/Banner";
import ResidentialCards from "../ResidentialCard/ResidentialCards";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-7xl mx-auto">
            <ResidentialCards></ResidentialCards>
            </div>

        </div>
    );
};

export default Home;