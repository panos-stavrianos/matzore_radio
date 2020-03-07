import React from "react";
import {Col, Row} from "reactstrap";


const MembersGrid = ({members}) => {
    if (!members || members.length === 0)
        return (
            <div className='m-5 justify-content-center'>
                <h4 className='m-4'>Δεν υπάρχουν μέλη</h4>
            </div>
        );
    return (
        <div className='m-5 justify-content-center'>
            <div className='m-4'><h2>Εκπομπές</h2></div>
            <Row>
                {members.map((member, i) => (
                    <Col xl="3" md="4" sm="6" xs="12" key={i}>
                        <div className="card">
                            <a href={'/member/' + member.id}>
                                <div className="card-header avatar">
                                    <img
                                        style={{height: "170px", width: "170px"}}
                                        alt={member.name}
                                        className=" img-circle img-no-padding img-responsive center"
                                        src={member.avatar ? member.avatar : require("assets/img/matzore_logo_192.png")}
                                    />
                                </div>
                                <div className="card-body">
                                    <h4 className="card-subtitle mb-2 text-muted">{member.name}</h4>
                                    <p className="card-text">{member.bio}</p>
                                </div>
                            </a>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    )
};

export default MembersGrid