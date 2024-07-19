import "./FuturePost.css";

function FuturePost() {
  return (
    <>
      <div className="futureDesktop">
        <div className="futurePost">
          <div className="futurePostWrapper">
            <h1 className="futurePostTitle">
              FUTURE 
              <div className="futurePostEdit">
                <i className="futurePostIcon fa-solid fa-pen-to-square"></i>
                <i className="futurePostIcon fa-solid fa-heart"></i>
              </div>
            </h1>
            <div className="futurePostInfo">
              <span className="futurePostAuthor">
                Author: <b>Aman</b>
              </span>
              <span className="futurePostDate">Created with Love</span>
            </div>
            <div className="futureRow">
              <div className="futureColumn futureColumnText">
                <p className="futurePostDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div className="futureColumn">
                <img
                  src="https://images.pexels.com/photos/163891/italy-sicily-sea-ocean-163891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="cutieeee"
                  className="storyPostImgColumn"
                />
              </div>
            </div>
            <div className="futureRow">
              <div className="futureColumn">
                <img
                  src="https://images.pexels.com/photos/754595/pexels-photo-754595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="cutieeee"
                  className="storyPostImgColumn"
                />
              </div>
              <div className="futureColumn futureColumnText">
                <p className="futurePostDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="futureMobile">
        <div className="futurePost">
          <div className="futurePostWrapper">
            <h1 className="futurePostTitle">
              OUR FUTURE TOGETHER
              <div className="futurePostEdit">
                <i className="futurePostIcon fa-solid fa-pen-to-square"></i>
                <i className="futurePostIcon fa-solid fa-heart"></i>
              </div>
            </h1>
            <div className="futurePostInfo">
              <span className="futurePostAuthor">
                Author: <b>Aman</b>
              </span>
              <span className="futurePostDate">Written with Love</span>
            </div>

            {/* First Section */}
            <div className="futureColumnText">
              <p className="futurePostDesc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <img src="https://images.pexels.com/photos/163891/italy-sicily-sea-ocean-163891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="cutieeee" className="futurePostImgColumn" />

            {/* Second Section */}
            <div className="futureColumnText">
              <p className="futurePostDesc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <img src="https://images.pexels.com/photos/754595/pexels-photo-754595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="cutieeee" className="futurePostImgColumn" />
          </div>
        </div>
      </div>
    </>
  );
}

export default FuturePost;
