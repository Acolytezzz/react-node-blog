import "../Relationship.css";
// import image26a from "../../../images/image26a.jpg";
// import image26 from "../../../images/image26.jpg";
import { Link } from "react-router-dom";

function Mid() {
  return (
    <div className="storyPost">
      <div className="storyPostWrapper">
        <picture>
          <source media="(max-width: 570px)" srcSet="" />
          <img src="" alt="cutieeee" className="storyPostImg" />
        </picture>
        <h1 className="storyPostTitle">
          MID STAGE: Bonding in the Midst of Trials
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
          The mid-stage of our relationship was a testament to our strength and
          commitment. This phase was marked by opportunities for growth and
          deeper understanding. Occasionally, we stumbled upon disagreements and
          misunderstandings, but these moments only brought us closer. One
          memorable incident occurred when a weekend trip was cancelled due to
          unforeseen weather, leaving us both disappointed. Instead of blaming
          each other, we took it as a chance to learn and grow together.
          <br />
          <br />
          Despite the occasional hiccups, we always found a way to reconcile.
          After a long, tense day, we would take a deep breath, reflect on our
          actions, and apologize sincerely. These moments of humility and
          forgiveness strengthened our bond. We learned to communicate better
          and to understand each other's perspectives.
          <br />
          <br />
          Amidst the challenges, we had a lot of fun too. We enjoyed spontaneous
          weekend getaways, laughing over silly mishaps, and creating beautiful
          memories. This period was a blend of trials and joys, solidifying our
          love and commitment to each other.
        </p>
        <div className="btnContainer">
          <Link to="/early" className="link">
            <button className="btnStyled">Prev</button>
          </Link>
          <Link to="/late" className="link">
            <button className="btnStyled">Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Mid;
