import "../Relation.css";
import SideBar from "../../../Components/SideBar/SideBar";
import SinglePost from "../../../Components/RelationshipPages/SinglePost/SinglePost";

function SinglePage() {
  return (
    <div className="relation">
      <SinglePost />
      <SideBar />
    </div>
  )
}

export default SinglePage