import React from 'react';
import './DailyPlan.css';

const dailyPlan = (props) => {
    return(
        <div className="daily-plan">
            <div>{props.name}</div>
            <div>{props.item1}</div>
            <div>{props.item2}</div>
            <div>{props.item3}</div>
            <div>{props.item4}</div>
            <hr/>
        </div>
    );
}

export default dailyPlan;