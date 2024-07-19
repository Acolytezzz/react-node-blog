import { Link } from "react-router-dom";
import "../Post.css";
// import image23 from "../../../images/image23.jpg"

function Post3() {
  return (
    <div className="post">
      <img
        className="postImg"
        src=""
        alt=""
      />
      <div className="postInfo">
        <span className="postTitle">
          <Link to="/late" className="link">
            Late Relationship
          </Link>
        </span>
        <hr />
      </div>
      <p className="postDesc">
        The late stage of our relationship is where we truly put a stamp on our
        love story. We know, without a doubt, that we love each other deeply.
        Having navigated through all the hurdles and challenges, we’ve emerged
        stronger and more connected than ever. This stage is the best for me
        because we have learned how to live together harmoniously, and
        disagreements have become rare.
      </p>
    </div>
  );
}

export default Post3;
