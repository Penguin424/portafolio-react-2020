import React from 'react';

import {GitHub, LinkedIn} from '@material-ui/icons';
import {Link} from 'react-router-dom';

import '../assets/components/NavbarP.css';

const NavbarP = () => {
    return (
        <nav className="navbar  navbar-dark navbar-expand-md bg-dark">
            <Link className="navbar-brand" to="/">
                PR
            </Link>
            <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav mr-auto ml-auto text-center">
                    <Link className="nav-item nav-link twoP active twoPbr" to="/sobre_mi">
                        Sobre mi
                    </Link>
                    <Link className="nav-item nav-link active twoP twoPbr" to="/">
                        Inicio
                    </Link>
                    <Link className="nav-item nav-link twoP active twoPbr" to="/">
                        Contacto
                    </Link>
                </div>
                <div className="d-flex flex-row justify-content-center navbar-nav ">
                    <a className="nav-item nav-link active mr-2" href="https://github.com/Penguin424">
                        <GitHub></GitHub>
                    </a>
                    <a className="nav-item nav-link active ml-2" href="https://www.linkedin.com/in/juan-pablo-rizo-quintero-858336191/"  >
                        <LinkedIn></LinkedIn>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default NavbarP;