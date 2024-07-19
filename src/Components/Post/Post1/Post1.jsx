import { Link } from "react-router-dom";
import "../Post.css";
// import image12 from "../../../images/image12.jpg"

function Post1() {
  return (
    <div className="post">
      <img
        className="postImg"
        src=""
        alt=""
      />
      <div className="postInfo">
        <span className="postTitle">
          <Link to="/early" className="link">
            Early Relationship
          </Link>
        </span>
        <hr />
      </div>
      <p className="postDesc">
        Our early relationship was wild and full of excitement. Priya and I were
        both trying to figure each other out, navigating the thrilling yet
        uncertain path of a new romance. Every moment was a rollercoaster of
        emotions, as we questioned if we were truly meant to be together.
      </p>
    </div>
  );
}

export default Post1;
