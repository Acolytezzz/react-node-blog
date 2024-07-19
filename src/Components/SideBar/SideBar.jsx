import "./SideBar.css";
// import image21 from "../../images/image21.jpg"

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">🌟 BLOG🌟</span>
        <img
          className="sidebarImg"
          src="https://images.pexels.com/photos/133472/pexels-photo-133472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, voluptatum itaque! Sunt tempora animi error cumque sint, ex repudiandae vitae aliquam esse iusto ullam similique iure optio exercitationem eum ratione?
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitie">CHARACTER TRAITS</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Happy</li>
          <li className="sidebarListItem">Sad</li>
          <li className="sidebarListItem">Angry</li>
          <li className="sidebarListItem">Cute</li>
          <li className="sidebarListItem">Stressed</li>
          <li className="sidebarListItem">Excited</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitie">FOLLOW US</span>
        <div className="sidebarSocial">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="link"
          >
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="link"
          >
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>
          </a>
          <a href="https://www.snapchat.com/" target="_blank" className="link">
            <i className="sidebarIcon fa-brands fa-square-snapchat"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
