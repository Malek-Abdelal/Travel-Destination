import { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
const data = require('../../data/data.json');



function TourDetails (){
    
    let [showLines, setShowLines] = useState(false);
    function seeLinesHandler (){
        setShowLines(!showLines);
    }

    function linesLengthHandler(){
        return !(showLines === true) ? `${renderTour(id).info.substring(1, 100)}` : `${renderTour(id).info}`;
    }

    function linesStateHandler(){
        return !(showLines === true) ? "more ..." : "less";
    }

    let {id} = useParams();  
    
    function renderTour(id) {
        let tourDetails = data.filter(ele => ele.id.toString() === id);
        return tourDetails[0];
    }
        return(
        <>
        <Header/>
        <div>
            <p>{`City : ${renderTour(id).name}`}</p>
            <p >{`About : ${linesLengthHandler()}`}<span style={{cursor: "pointer"}} onClick={seeLinesHandler}>, see {linesStateHandler()}</span></p>
            <img src = {`${renderTour(id).image}`} alt="City img"/>
            <p>{`Average price to visit : ${renderTour(id).price}`}</p>
        </div>
        <Footer/>
        </>

    );
}

export default TourDetails;
