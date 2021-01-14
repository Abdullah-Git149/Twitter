import React from 'react';
import {
    FaRegImage,
    FaListAlt,
    FaRegSmile,
    FaCalendarCheck
} from "react-icons/fa"
const CreateTweet = () => {
    return (
        <div className="create">
            <div className="create__first">
                <div className="create__img">
                    <img src="/images/my.jpg" alt="" />
                </div>
                <div className="create__input">
                    <input type="text" placeholder="What's happening" />
                </div>
            </div>

            <div className="create__sec">
                <div className="create__sec__icon">
                    <FaRegImage className="ic" />
                    <FaListAlt className="ic" />
                    <FaRegSmile className="ic" />
                    <FaCalendarCheck className="ic" />
                </div>
                <div className="create__sec__btn">
                    <a href="">Tweet</a>
                </div>


            </div>
        </div>

    );
};

export default CreateTweet;