import React, {Fragment} from 'react'

import {Container, Col, Row} from 'react-bootstrap'
import { Link } from 'react-router-dom';

import '../assets/styles/Home.css';

import coin from '../assets/statics/Ph03nyx-Super-Mario-Retro-Coin.ico';

const Home = () => {
    return ( 
        <Fragment>            

            <Container className=" mt-5 py-5 pb-3 containerHome">
                <Row>
                    <Col md={12} xs={12} className="text-justify">
                        <p className="h1 text-white twoP text-start  text-center">
                            ¡BIENVENIDO!
                        </p>
                    </Col>
                    <Col md={12} xs={12} className=" mt-1">
                        <p className="text-justify text-white twoP text-start mt-2 ">
                           ¿Estas pensando en contratarme?
                           Veamos por que seria una buena idea el hacerlo y no seguir buscando otro desarrollador
                        </p>
                    </Col>
                    <Col md={12} xs={12} className="text-center mt-1" >
                        <Link to="/" className=" text-white text-center twoP focusS text-start text-justify">
                            <span className="focusS">¡Comencemos!</span> <img src={coin} style={{width: '75px'}} alt="coin.ico" className="focusS"  />
                        </Link>
                    </Col>
                </Row>
            </Container>

        </Fragment>
        
     );
}
 
export default Home;