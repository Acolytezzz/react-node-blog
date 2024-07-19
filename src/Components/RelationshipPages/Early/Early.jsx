import "../Relationship.css";
import { Link } from "react-router-dom";

function Early() {
  return (
    <div className="storyPost">
      <div className="storyPostWrapper">
        <picture>
          <source media="(max-width: 570px)" srcSet="" />
          <img src="" alt="cutieeee" className="storyPostImg" />
        </picture>
        <h1 className="storyPostTitle">
          EARLY STAGE : The Wild Early Days
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
          Our early relationship was wild and full of excitement. Priya and I
          were both trying to figure each other out, navigating the thrilling
          yet uncertain path of a new romance. Every moment was a rollercoaster
          of emotions, as we questioned if we were truly meant to be together.
          <br />
          <br />
          We had countless late-night conversations, sometimes deep and
          meaningful, other times light-hearted and playful. We disagreed often,
          our differences sparking passionate debates about everything from
          favorite movies to future dreams. One memorable night, we argued about
          our career aspirations, only to make up hours later, laughing and
          holding each other close.
          <br />
          <br />
          Despite the disagreements, the love and excitement we felt were
          undeniable. Each disagreement brought us closer, teaching us more
          about ourselves and each other. We were captivated by the thrill of
          discovering someone new, and the intense chemistry between us made
          every moment unforgettable.
        </p>

        <div className="btnStyledLeft">
          <Link to="/mid" className="link">
            <button className="btnStyled">Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Early;
