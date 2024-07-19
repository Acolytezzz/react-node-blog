import Post from "../Post/Post"
import Post1 from "../Post/Post1/Post1"
import Post2 from "../Post/Post2/Post2"
import Post3 from "../Post/Post3/Post3"
import Post4 from "../Post/Post4/Post4"
import "./Posts.css"

function Posts() {
  return (
    <div className="posts">
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      {/* <Post1/>
      <Post2/>
      <Post3/>
      <Post4/> */}
    </div>
  )
}

export default Posts