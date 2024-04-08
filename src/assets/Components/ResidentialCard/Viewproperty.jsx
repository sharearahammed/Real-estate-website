import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Authconfiguration/Authconfiguration";

const Viewproperty = () => {
    const {id} = useParams();
    const {cards} = useContext(AuthContext);
    const [singleCard , setSingleCars] = useState({});
    useEffect(()=>{
        const singleData = cards.find(item=>item.id == id);
        setSingleCars(singleData)
    },[cards,id])

    const {estate_title} = singleCard || {};
    return (
        <div>
            <h2>title: {estate_title}</h2>
        </div>
    );
};

export default Viewproperty;