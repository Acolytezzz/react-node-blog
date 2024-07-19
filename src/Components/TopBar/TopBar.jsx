import { Link } from "react-router-dom";
import "./TopBar.css";
// import image43 from "../../images/image43.jpg"

function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <a
          href="https://www.facebook.com/"
          target="_blank"
        >
          <i className="topIcon fa-brands fa-square-facebook"></i>
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <i className="topIcon fa-brands fa-square-instagram"></i>
        </a>
        <a href="https://www.snapchat.com/" target="_blank">
          <i className="topIcon fa-brands fa-square-snapchat"></i>
        </a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/story" className="link">
              STORY
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/gallery" className="link">
              GALLERY
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/future" className="link">
              FUTURE
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        <Link to="/" className="link">
          <img
            className="topImg"
            src="https://diamondartworld.com/cdn/shop/files/pomerian-puppy_4.jpg?v=1716986430&width=1445"
            alt="cute"
          />
        </Link>
      </div>
    </div>
  );
}

export default TopBar; 
