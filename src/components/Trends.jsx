import React from 'react';
import TrendsKeyword from './TrendsKeyword';

const Trends = () => {
    return (
        <div className="trends">
            <div className="trend__search">
                <input type="text" className="trend__input" placeholder="Serach Tweets"/>
            </div>
            <TrendsKeyword/>
            
        </div>
    );
};

export default Trends;