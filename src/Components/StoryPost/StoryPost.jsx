import "./StoryPost.css";

function StoryPost() {
  return (
    <>
      <div className="storyDesktop">
        <div className="storyPost">
          <div className="storyPostWrapper">
            <h1 className="storyPostTitle">
              STORY
              <div className="storyPostEdit">
                <i className="storyPostIcon fa-solid fa-pen-to-square"></i>
                <i className="storyPostIcon fa-solid fa-heart"></i>
              </div>
            </h1>
            <div className="storyPostInfo">
              <span className="storyPostAuthor">
                Author: <b>Aman</b>
              </span>
              <span className="storyPostDate">Created with Love</span>
            </div>
            <div className="storyRow">
              <div className="storyColumn storyColumnText">
                <p className="storyPostDesc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div className="storyColumn">
                <img
                  src="https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="cutieeee"
                  className="storyPostImgColumn"
                />
              </div>
            </div>
            <div className="storyRow">
              <div className="storyColumn">
                <img
                  src="https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="cutieeee"
                  className="storyPostImgColumn"
                />
              </div>
              <div className="storyColumn storyColumnText">
                <p className="storyPostDesc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
            <div className="storyRow">
              <div className="storyColumn storyColumnText">
                <p className="storyPostDesc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div className="storyColumn">
                <img
                  src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="cutieeee"
                  className="storyPostImgColumn"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="storyMobile">
        <div className="storyPost">
          <div className="storyPostWrapper">
            {/* First Section */}
            <div className="storyColumnText">
              <h1 className="storyPostTitle">
                OUR STORY
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <img
                src="https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="cutieeee"
                className="storyPostImgColumn"
              />
            </div>

            {/* Second Section */}
            <div className="storyColumnText">
              <p className="storyPostDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <img
                src="https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="cutieeee"
                className="storyPostImgColumn"
              />
            </div>

            {/* Third Section */}
            <div className="storyColumnText">
              <p className="storyPostDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <img
                src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="cutieeee"
                className="storyPostImgColumn"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StoryPost;
