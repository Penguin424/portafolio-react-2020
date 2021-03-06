import React from 'react';

import coin from '../../../assets/statics/Ph03nyx-Super-Mario-Retro-Coin.ico'

const CardL = () => {
    return (
        <div className="row no-gutters">
            <div className="col-md-4">
                <img src={coin} className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    );
};

export default CardL;