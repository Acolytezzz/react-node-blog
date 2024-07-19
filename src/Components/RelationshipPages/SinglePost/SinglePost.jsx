import "../Relationship.css";

function SinglePost() {
  return (
    <div className="storyPost">
      <div className="storyPostWrapper">
        <img
          src="https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="cutieeee"
          className="storyPostImg"
        />
        <h1 className="storyPostTitle">
        Lorem ipsum dolor sit amet consectetur.
          <div className="storyPostEdit">
            <i className="storyPostIcon fa-solid fa-pen-to-square"></i>
            <i className="storyPostIcon fa-solid fa-heart"></i>
          </div>
        </h1>
        <div className="storyPostInfo">
          <span className="storyPostAuthor">
            Author: <b>Aman</b>
          </span>
          <span className="storyPostDate">Love Dogs</span>
        </div>
        <p className="storyPostDesc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
          quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
          eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
          ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
          consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
          velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum
          fugiat quo voluptas nulla pariatur.
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
