import "../Relationship.css";
// import image31a from "../../../images/image31a.jpg";
// import image49a from "../../../images/image49a.jpg";
import { Link } from "react-router-dom";

function Anniversary() {
  return (
    <div className="storyPost">
      <div className="storyPostWrapper">
        <img src="" alt="cutieeee" className="storyPostImg" />
        <h1 className="storyPostTitle">
          ANNIVERSARY: A Testament to Our Love
          <div className="storyPostEdit">
            <i className="storyPostIcon fa-solid fa-pen-to-square"></i>
            <i className="storyPostIcon fa-solid fa-heart"></i>
          </div>
        </h1>
        <div className="storyPostInfo">
          <span className="storyPostAuthor">
            Author: <b>Aman</b>
          </span>
          <span className="storyPostDate">Written with Love</span>
        </div>
        <p className="storyPostDesc">
          As our anniversary draws near, my heart brims with gratitude and
          anticipation. The journey with Priya has been a profound testament to
          our enduring love, resilience, and shared growth. In celebration of
          this cherished milestone, Priya and I are embarking on a journey. This
          upcoming trip promises to be a pinnacle of our adventures together,
          filled with breathtaking views, shared laughter, and cherished moments
          that deepen our bond.
          <br />
          <br />
          Priya, you are not only my partner but also my confidant, my
          inspiration, and the beating heart of my life. Every day with you is a
          revelation of joy and fulfillment. This anniversary signifies more
          than the passage of time; it symbolizes the depth of our bond and the
          profound gratitude I hold for the privilege of loving and being loved
          by you.
          <br />
          <br />
          Here's to endless horizons of love, laughter, and shared dreams. Happy
          Anniversary, my beloved <span className="Priya">PRIYA.</span>
        </p>
        <div className="btnContainer">
          <Link to="/late" className="link">
            <button className="btnStyled">Prev</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Anniversary;
