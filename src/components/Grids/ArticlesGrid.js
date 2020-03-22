import React from "react";
import {Col, Row} from "reactstrap";


const ArticlesGrid = ({articles, category}) => {
    if (articles && articles.length)
        return (
            <div className='m-5 justify-content-center'>
                <div className='m-4'><h2>{category && category.name ? 'Άρθρα: ' + category.name : "Όλα τα Άρθρα"}</h2></div>
                <Row>
                    {articles.map((article, i) => (
                        <Col xl="3" md="4" sm="6" xs="12" key={i}>
                            <div className="card">
                                <a href={'/article/' + article.id}>

                                    <div className="card-header">
                                        <img
                                            style={{maxHeight: 200}}
                                            alt={article.title}
                                            className="img-rounded img-responsive center"
                                            src={article.cover ? article.cover : "https://images.unsplash.com/photo-1534531173927-aeb928d54385?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"}
                                        />
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-subtitle mb-2 text-muted">{article.title}</h4>
                                        <p className="card-text">{article.short_description}</p>
                                    </div>
                                </a>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        );
    else
        return (
            <div className='m-5 justify-content-center'>
                <h4 className='m-4'>Δεν υπάρχουν άρθρα</h4>
            </div>
        );
};

export default ArticlesGrid