import HeaderApplication from "../../components/header";
import Card from "../../components/post/card";
import "./feed.scss";

function Feed() {
    return(
        <div className="feed">
            <HeaderApplication />
            <div className="containerFeed">
                <Card />
                <Card />
                <Card />
                <Card />
                
            </div>
            <div>
                <h1>footer</h1>
            </div>
        </div>
    )
}

export default Feed;