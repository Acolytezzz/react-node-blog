import SideBar from "../../Components/SideBar/SideBar";
import "./Write.css";

function Write() {
  return (
    <div className="write">
      <div className="writeWrapper">
        <img
          className="writeImg"
          src="https://img.freepik.com/free-photo/3d-rendering-cartoon-like-dog_23-2150780984.jpg?t=st=1718724165~exp=1718727765~hmac=16f9225088f6bc00f2acc7df138d7d06b0caf1046ce5120bcda76e0b881c264f&w=1060"
          alt="happy puppy"
        />
        <form className="writeForm">
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i className="writeIcon fa-solid fa-folder-open"></i>
            </label>
            <input type="file" id="fileInput" />
            <input
              type="text"
              placeholder="Title"
              className="writeInput"
              autoFocus={true}
            />
          </div>
          <div className="writeFormGroup">
            <textarea
              placeholder="Write your story..."
              type="text"
              className="writeInput writeText"
            ></textarea>
          </div>
          <button className="writeSubmit">Publish</button>
        </form>
      </div>
      <SideBar/>
    </div>
  );
}

export default Write;
