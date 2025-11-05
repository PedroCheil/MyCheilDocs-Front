import HeaderApplication from "../../components/header";
import "./feed.scss";

function Feed() {
    return(
        <>
        <HeaderApplication />
        <div className="containerFeed">
            <div className="cardPost">
                <div className="cardPostTitle">
                    <span>Titulo post</span>
                    <span>UserPost</span>
                </div>
                <div className="cardPostDescription">
                    <p>Postagem sobre metodos de emagrecimento ete...</p>
                </div>
                <div className="cardPostData">
                    <span>Data postagem</span>
                </div>

            </div>
            <div className="cardPost">
                <div className="cardPostTitle">
                    <span>Titulo post</span>
                    <span>UserPost</span>
                </div>
                <div className="cardPostDescription">
                    <p>Postagem sobre metodos de emagrecimento ete...</p>
                </div>
                <div className="cardPostData">
                    <span>Data postagem</span>
                </div>

            </div>
            <div className="cardPost">
                <div className="cardPostTitle">
                    <span>Titulo post</span>
                    <span>UserPost</span>
                </div>
                <div className="cardPostDescription">
                    <p>Postagem sobre metodos de emagrecimento ete...</p>
                </div>
                <div className="cardPostData">
                    <span>Data postagem</span>
                </div>

            </div>
        </div>
        </>
    )
}

export default Feed;