import React from "react";
import {Col, Row} from "reactstrap";
import {Link} from "react-router-dom";


const EventsGrid = ({events}) => {
    if (!events || events.length === 0)
        return (
            <div className='m-5 justify-content-center'>
                <h4 className='m-4'>Δεν υπάρχουν εκδηλώσεις</h4>
            </div>
        );
    return (
        <div className='m-5 justify-content-center'>
            <div className='m-4'><h2>Εκδηλώσεις</h2></div>
            <Row>
                {events.map((event, i) => (
                    <Col xl="3" md="4" sm="6" xs="12" key={i}>
                        <div className="card">
                            <Link to={'/event/' + event.id}>
                                <div className="card-header">
                                    <img
                                        style={{maxHeight: 200}}
                                        alt={event.title}
                                        className="img-rounded img-responsive center"
                                        src={event.cover ? event.cover : "https://images.unsplash.com/photo-1534531173927-aeb928d54385?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"}
                                    />
                                </div>
                                <div className="card-body">
                                    <h4 className="card-subtitle mb-2 text-muted">{event.title}</h4>
                                    <p className="card-text">{event.short_description}</p>
                                </div>
                            </Link>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    )
};

export default EventsGrid