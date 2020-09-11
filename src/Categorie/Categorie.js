import React from 'react'

import './Categorie.css';
import Card from 'react-bootstrap/Card';


function Categorie(props) {
    return (
        <div>
            


            <Card style={{ width: '107%', border: '0px' , borderRadius: '0px' , height:'350px' }}>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                     <Card.Img  variant="top" src={props.image} />
                 
                </Card.Body>

                <p className="see">See more</p>
            </Card>

        </div>
    )
}

export default Categorie
