import React, { useState } from 'react';
import { FaRegCheckCircle, FaComment, FaShare, FaHeart, FaLeaf } from "react-icons/fa"

const Posts = () => {
    const [post, setPost] = useState([
        {
            id: 1,
            info: "Barça training session ahead of the #SuperCopaBarça semifinal versus Real Sociedad",
            pic: "https://pbs.twimg.com/media/ErdEbZzXEAEjkQI?format=jpg&name=small"
        },
        {
            id: 2,
            info: "Airplane arriving Leo #Messi Mate",
            pic: "https://pbs.twimg.com/media/Erh88EFXMAM8SO0?format=jpg&name=small"
        },
        {
            id: 3,
            info: "#SupercopaBarça When is the semifinal against Real Sociedad? ALL THE INFO HERE Downwards arrow",
            pic: "https://pbs.twimg.com/card_img/1348693707269275650/9U7YQDFx?format=jpg&name=small"
        },
        {
            id: 4,
            info: "The former #BarcaResidencyAcademy Arizona  @BarcaAcademyAZ player, Matthew Hoppe, became the first US player to score a hat trick in a Bundesliga match on Saturday",
            pic: "https://pbs.twimg.com/media/Ereci9iXYAAAruj?format=jpg&name=small"
        },
        {
            id: 5,
            info: "Remember this pic? Collision symbolCollision symbolCollision symbol It was taken six years ago #OnThisDay.",
            pic: "https://pbs.twimg.com/media/Erd3jA2W4Ac7QBr?format=jpg&name=small"
        }
    ])
    return (
        <div className="postss">
            {/* <div className="post__first">
                <div className="post__first__img">
                    <img src="/images/my.jpg" alt="" />
                </div>
                <div className="post__first__fname">
                    <strong>Abdullah Amjad</strong> <FaRegCheckCircle className="verify" />
                </div>
                <div className="post__first__username">
                    <strong>@Abdullah149</strong>
                </div>
            </div> */}

            <div className="post__detail">
                {
                    post.map(data => (
                        <div id={data.id}>
                            <div className="post__first">
                                <div className="post__first__img">
                                    <img src="/images/my.jpg" alt="" />
                                </div>
                                <div className="post__first__fname">
                                    <strong>Abdullah Amjad</strong> <FaRegCheckCircle className="verify" />
                                </div>
                                <div className="post__first__username">
                                    <strong>@Abdullah149</strong>
                                </div>
                            </div>
                            <div className="post__detail__data">
                                <strong><p>{data.info}</p></strong>
                            </div>
                            <div className="post__detail__img">
                                <img src={data.pic} alt="" />
                            </div>
                            <div className="post__detail__reaction">
                                <span><FaComment className="re" />34</span>
                                <span> <FaShare className="re" />6 </span>
                                <span> <FaHeart className="re" />45</span>
                                <span><FaLeaf className="re" />44</span>
                            </div>

                        </div>
                    ))
                }


            </div>

        </div>
    );
};

export default Posts;