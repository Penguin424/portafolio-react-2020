import React from 'react';

import CardL from './CardLR/CardL';
import CardR from './CardLR/CardR';

const CardAbout = ({idLR}) => {
    return (
        <div className="container mt-5 py-5 pb-3">
            <div className="containerAbout mb-3" style={{maxWidth: "1050px"}}>
                {idLR % 2 === 0 ? <CardL /> : <CardR />}
            </div>
        </div>
    );
};

export default CardAbout;