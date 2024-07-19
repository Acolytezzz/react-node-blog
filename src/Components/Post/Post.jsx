import { Link } from "react-router-dom";
import "./Post.css";

function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://img.freepik.com/free-photo/puppy-that-is-walking-snow_1340-37228.jpg?t=st=1718711188~exp=1718714788~hmac=e46c797b6e8fdd9031352cc154a4f5a8e3a2afdfe5998efb10f8accf300537ce&w=1060"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          <Link to="/post" className="link">
            Lorem ipsum dolor sit amet consectetur.
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi,
        praesentium quo earum sit incidunt sunt, vel vero laborum nihil officiis
        dolore facilis. Eos hic vel, tempora quidem aperiam recusandae
        repellendus! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Sequi, praesentium quo earum sit incidunt sunt, vel vero laborum nihil
        officiis dolore facilis. Eos hic vel, tempora quidem aperiam recusandae
        repellendus! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Sequi, praesentium quo earum sit incidunt sunt, vel vero laborum nihil
        officiis dolore facilis. Eos hic vel, tempora quidem aperiam recusandae
        repellendus!
      </p>
    </div>
  );
}

export default Post;
