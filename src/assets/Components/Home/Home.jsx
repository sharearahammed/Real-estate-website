import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import ResidentialCards from "../ResidentialCard/ResidentialCards";
import Categories from "../Categories Section/Categories";

const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Opulent Escapes Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
            <Banner></Banner>
            <div className="max-w-7xl mx-auto">
            <ResidentialCards></ResidentialCards>
            <Categories></Categories>
            </div>

        </div>
    );
};

export default Home;