
import { useContext } from "react";
import ResidentialCard from "./ResidentialCard";
import { AuthContext } from "../Authconfiguration/Authconfiguration";

const ResidentialCards = () => {

    const {cards} = useContext(AuthContext)

  return (
    <div className="mt-20">
        <div className="mb-6">
        <h1 className="text-center lg:text-4xl font-bold">All Properties</h1>
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
