import React from "react";
import "./SeasonDisplay.css"

const seasonConfig = {
    summer: {
        text: "summer",
        iconName: "sun"
    },
    winter: {
        text: "winter",
        iconName: "snowflake"
    }
};


const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? "summer" : "winter"; //if northern hemisphere return summer otherwise return winter
    } else {
        return lat > 0 ? "winter" : "summer";
    }
}


const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const icon = season === 'winter' ? 'snowflake' : 'sun';
    
        return <div className={`season-display ${season}`} >
            <i className={`icon-left massive ${icon} icon`} />
            <h1>Season: {season}</h1>
            <i className={`icon-right massive${icon} icon`} />
        </div>
    



};

export default SeasonDisplay;