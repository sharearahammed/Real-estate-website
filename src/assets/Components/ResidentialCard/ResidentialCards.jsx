
import { useContext } from "react";
import ResidentialCard from "./ResidentialCard";
import { AuthContext } from "../Authconfiguration/Authconfiguration";

const ResidentialCards = () => {

    const {cards} = useContext(AuthContext)

  return (
    <div id="all" className="mt-20">
        <div className="mb-16 flex flex-col justify-center items-center">
        <h1 className="text-center lg:text-4xl font-bold mb-4">All Properties</h1>
        <p className="text-center">Explore our carefully curated selection of properties, from dynamic urban residences to tranquil suburban <br/> retreats. With options to suit every taste, discover your ideal home where luxury meets comfort, promising a <br/>lifestyle of fulfillment and serenity. Your dream sanctuary awaits, ready to redefine the concept of home.</p>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 w-full gap-6 ">
        {cards.map((card) => (
          <ResidentialCard key={card.id} card={card}></ResidentialCard>
        ))}
      </div>
    </div>
  );
};

export default ResidentialCards;
