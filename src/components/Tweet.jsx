import React from 'react';
import CreateTweet from '../CreateTweet';
import Posts from './Posts';


const Tweet = () => {
    return (
        <div className="posts">
            <div className="post__home">Home</div>
            <CreateTweet/>
            <Posts/>
        
            
            
        </div>
    );
};

export default Tweet;