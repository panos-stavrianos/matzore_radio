import React from "react";
import {Col, Row} from "reactstrap";


const ShowsGrid = ({shows}) => {
    return (
        <div className='m-5 justify-content-center'>
            <div className='m-4'><h1>Εκπομπές</h1></div>
            <Row>
                {shows.map((show) => (
                    <Col xl="3" md="4" sm="6" xs="12">
                        <div className="card">
                            <a href={'/show/' + show.id}>

                                <div className="card-header">
                                    <img
                                        style={{maxHeight: 200}}
                                        alt={show.name}
                                        className="img-rounded img-responsive center"
                                        src={show.logo ? show.logo : "https://images.unsplash.com/photo-1534531173927-aeb928d54385?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"}
                                    />
                                </div>
                                <div className="card-body">
                                    <h4 className="card-subtitle mb-2 text-muted">{show.name}</h4>
                                    <p className="card-text">{show.short_description}</p>
                                </div>
                            </a>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    )
};

export default ShowsGrid