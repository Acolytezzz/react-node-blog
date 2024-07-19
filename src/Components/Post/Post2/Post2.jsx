import { Link } from "react-router-dom";
import "../Post.css";
// import image26 from "../../../images/image26.jpg"

function Post2() {
  return (
    <div className="post">
      <img
        className="postImg"
        src=""
        alt=""
      />
      <div className="postInfo">
        <span className="postTitle">
          <Link to="/mid" className="link">
            Mid-Relationship.
          </Link>
        </span>
        <hr />
      </div>
      <p className="postDesc">
        The mid-stage of our relationship was a testament to our strength and
        commitment. This phase was marked by opportunities for growth and deeper
        understanding. Occasionally, we stumbled upon disagreements and
        misunderstandings, but these moments only brought us closer. One
        memorable incident occurred when a weekend trip was cancelled due to
        unforeseen weather, leaving us both disappointed. Instead of blaming
        each other, we took it as a chance to learn and grow together.
      </p>
    </div>
  );
}

export default Post2;
