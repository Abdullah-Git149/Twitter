import React from 'react';

const Propss = (props) => {
    return (
        <div>
            <div key={props.id}>
                <div className="country">
                    {props.country}
                </div>
                <div className="keyword__name">
                    <strong>{props.keyword}</strong>
                </div>
                <div className="keyword__tweets">
                    <strong>{props.totalFollower}</strong>
                </div>
            </div>
        </div>
    );
};

export default Propss;