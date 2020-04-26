import React from "react";
import {Link} from "react-router-dom";


const ScheduleTimeline = ({records, day}) => {
    if (!records || records.length === 0) {
        return (
            <div className='m-5 justify-content-center'>
                <h4 className='m-4'>Δεν υπάρχει πρόγραμμα εκπομπών</h4>
            </div>
        );
    }
    let today = new Date()
    if (today.toLocaleString("en-US", {weekday: 'long'}) === day[0]) {
        let time = today.getHours() + ":" + today.getMinutes()
        records.forEach((record, i) => {
            if (time > record.from_time && time < record.to_time) {
                console.log("!!!!")
            }

        });
    }


    return (
        <div className='m-5 justify-content-center'>
            <ul className="timeline timeline-centered">
                {records.map((record, i) => (
                    <li className="timeline-item" key={i}>
                        <div className="timeline-info">
                            <span>{record.from_time + " - " + record.to_time}</span>
                        </div>
                        <div className="timeline-marker"/>
                        <div className="timeline-content">
                            <h3 className="timeline-title">
                                <Link to={'/show/' + record.show.id}
                                   title="Δείτε περισσότερα">{record.show.name}</Link>
                            </h3>
                            <p>{record.show.short_description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default ScheduleTimeline




