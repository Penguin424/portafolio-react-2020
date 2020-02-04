import React, {Fragment} from 'react';

import AboutCard from '../component/CardAbout/CardAbout';

import '../assets/styles/About.css';

const About = () => {
    return (
        <Fragment>
            <AboutCard idLR={1} />
            <AboutCard idLR={2} />
            <AboutCard idLR={3} />
            <AboutCard idLR={4} />
        </Fragment>
    );
};

export default About;