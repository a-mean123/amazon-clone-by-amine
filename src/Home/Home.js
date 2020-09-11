import React from 'react';
import './Home.css';
import Product from '../Product/Product';
import Categorie from '../Categorie/Categorie';
import Slider from '../Slider/Slider';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
function Home() {
    return (
        <div className="home">

        <div className="home__container">

        <Slider className="home__image"  />

     <Container>

        <Row className="home__row">

            <Col>
            
            <Categorie
            title="Amazon Basics"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            />

            </Col>


            <Col>
            
            <Categorie
             title="Amazon Gaming"
            image="https://images-na.ssl-images-amazon.com/images/I/41kaOFDXzSL._AC_SY200_.jpg"
            />

            </Col>

            <Col>
            
            <Categorie
             title="Amazon kishen"

            image="https://images-na.ssl-images-amazon.com/images/I/51PxpmVf51L._AC_SY200_.jpg"
            />

            </Col>

            <Col>
            
            <Categorie 
             title="Amazon kids"
             image="https://images-na.ssl-images-amazon.com/images/I/41-7l-po+EL._AC_SY200_.jpg"
            />

            </Col>
        </Row>


            <Row  className="home__row">
                 <Col>
                 <Product 
              
                      id="5455265"
                      title="AmazonBasics Double Braided Nylon Lightning to USB Cable, Advanced Collection, MFi Certified Apple iPhone Charger, Dark Gray, 6 Foot"
                      price={15}
                      image="data:image/webp;base64,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"
                      rating={4}
                 />
                 </Col>   

                 <Col>
                 <Product 
            
            id="5485665ghj"
            title="Vizio D32F-G D-Series 32 Class 1080p LED LCD Smart Full-Array LED LCD TV (2019 Model)"
            price={186.45}
            image="https://images-na.ssl-images-amazon.com/images/I/91UsHjAPTlL._AC_UL160_SR160,160_.jpg"
            rating={5}
        />

                 
                 </Col>

            </Row>
           

        <Row  className="home__row">

            <Col>
            <Product 
                id="5455265dfg"
                title="AmazonBasics Double Braided Nylon Lightning to USB Cable, Advanced Collection, MFi Certified Apple iPhone Charger, Dark Gray, 6 Foot"
                price={150}
                image="data:image/webp;base64,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"
                rating={4}
            />

            </Col>
           
            <Col>
            <Product 
                id="5485665ds"
                title="Holstein Housewares HH-09037016 Large Non-Stick Waffle Maker, 8-inch, Red"
                price={33.99}
                image="https://images-na.ssl-images-amazon.com/images/I/51-3oOmIahL._AC_.jpg"
                rating={5}
            />
            
            </Col>


            <Col>
            
            <Product 
                id="5485665sdfsf"
                title="DualShock 4 Wireless Controller for PlayStation 4 - Magma Red"
                price={64.99}
                image="https://images-na.ssl-images-amazon.com/images/I/41kaOFDXzSL._AC_SY200_.jpg"
                rating={4}
            />

            </Col>
        </Row>
           

        <Row  className="home__row">
            <Col>
            <Product 
                id="5485665sdfsdsd"
                title="AmazonBasics Stainless Steel Portable Fast, Electric Hot Water Kettle for Tea and Coffee, 1 Liter, Silver"
                price={158}
                image="https://m.media-amazon.com/images/I/91oiSVwU7OL._AC_UL320_.jpg"
                rating={5}
            />
            </Col>
        </Row>
           
 
        </Container>



    

        </div>

        </div>
    )
}

export default Home;
