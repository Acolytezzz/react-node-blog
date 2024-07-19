import "./Story.css"
import SideBar from '../../Components/SideBar/SideBar'
import StoryPost from '../../Components/StoryPost/StoryPost'

function Story() {
  return (
    <div className="story">
      <StoryPost />
      <SideBar /> 
    </div>
  )
}

export default Story