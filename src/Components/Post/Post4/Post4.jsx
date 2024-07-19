import { Link } from "react-router-dom";
import "../Post.css";
// import image49 from "../../../images/image49.jpg"

function Post4() {
  return (
    <div className="post">
      <img
        className="postImg"
        src=""
        alt=""
      />
      <div className="postInfo">
        <span className="postTitle">
          <Link to="/anniversary" className="link">
            Anniversary
          </Link>
        </span>
        <hr />
      </div>
      <p className="postDesc">
        As our anniversary draws near, my heart brims with gratitude and
        anticipation. The journey with Priya has been a profound testament to
        our enduring love, resilience, and shared growth. In celebration of this
        cherished milestone, Priya and I are embarking on a journey. This
        upcoming trip promises to be a pinnacle of our adventures together,
        filled with breathtaking views, shared laughter, and cherished moments
        that deepen our bond.
      </p>
    </div>
  );
}

export default Post4;
