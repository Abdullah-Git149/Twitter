import React, { useState } from 'react';
import Propss from './Propss';

const TrendsKeyword = () => {
    const [state, setState] = useState([
        {
            id: 1,
            country: "Trend in Pakistan",
            keyword: "ISPR",
            totalFollower: "3423k"
        },
        {
            id: 2,
            country: "Trend in Pakistan",
            keyword: "Imran Khan",
            totalFollower: "13436k"
        },
        {
            id: 3,
            country: "Trend in Pakistan",
            keyword: "Lional Messi",
            totalFollower: "9783423k"
        }
    ])
    return (
        <div className="keyword">
            <div className="key">
                <div className="keyword__heading">
                    <h4>Trends for you!!!</h4>
                </div>
                {state.map(data => (
                    <Propss
                        country={data.country}
                        keyword={data.keyword}
                        totalFollower={data.totalFollower} />
                ))}

            </div>
        </div>
    );
};

export default TrendsKeyword;