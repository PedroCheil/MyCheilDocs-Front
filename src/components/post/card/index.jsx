import {Mars, Users, Venus}  from 'lucide-react';
import "./card.scss";

function Card(){
    return(
        <div className="containerCard">
            <div className="containerCardHeader">
                <div className="cardHeaderUser">
                    <div className="userImage">
                        <Users size={43}/>
                    </div>
                    <div className="userInfos">
                        <span className="userName">Pedro Trudes</span>
                        <div className="userPosition">
                            <span className="position">Publisher</span>
                        </div>
                    </div>
                </div>
                <div className="cardHeaderOption">
                    <span>...</span>
                </div>
            </div>

            <div className="containerCardPost">
                <div className="cardPostTitle">
                    <span className="postTitle">Como pedir ferias</span>
                    <div className="postSector">
                        <span className="sector">
                            RH
                        </span> 
                    </div>
                </div>
                <div className="cardPostInfo">
                    <p>
                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div className="cardPostData">
                    <span>10/11/2025</span>
                </div>
            </div>
        </div>
    )
}

export default Card;