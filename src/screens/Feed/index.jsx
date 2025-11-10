import HeaderApplication from "../../components/header";
import Card from "../../components/post/card";
import "./feed.scss";

function Feed() {
    return(
        <>
        <HeaderApplication />
        <div className="containerFeed">
            <Card />
            <Card />
            <Card />
            <Card />
            
        </div>
        </>
    )
}

export default Feed;