import "../Relationship.css";
// import image23a from "../../../images/image23a.jpg";
import { Link } from "react-router-dom";

function Late() {
  return (
    <div className="storyPost">
      <div className="storyPostWrapper">
        <img src="" alt="cutieeee" className="storyPostImg" />
        <h1 className="storyPostTitle">
          LATE STAGE: The Pinnacle of Our Love
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
          The late stage of our relationship is where we truly put a stamp on
          our love story. We know, without a doubt, that we love each other
          deeply. Having navigated through all the hurdles and challenges, we’ve
          emerged stronger and more connected than ever. This stage is the best
          for me because we have learned how to live together harmoniously, and
          disagreements have become rare.
          <br />
          <br />
          Our relationship now is something a man could only dream of. I have a
          loving partner who supports me in every aspect of life. Looking back,
          I can proudly say that we’ve made it through the tough times, and our
          bond is unbreakable. This sense of fulfillment is something I cherish
          deeply. It’s like ticking a box on the list of life’s greatest
          achievements and saying, “We did it.”
          <br />
          <br />
          As our anniversary approaches, I am reminded of how far we’ve come and
          how strong our love has grown. We have exciting plans to visit the
          Great Ocean Road with our friends, and I’m sure it will be our best
          vacation yet. This trip symbolizes not just another adventure, but a
          celebration of our enduring love and the beautiful journey we’ve
          shared.
        </p>
        <div className="btnContainer">
          <Link to="/mid" className="link">
            <button className="btnStyled">Prev</button>
          </Link>
          <Link to="/anniversary" className="link">
            <button className="btnStyled">Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Late;
