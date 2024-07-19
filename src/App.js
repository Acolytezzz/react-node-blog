import "./App.css";
import Home from "./Pages/Home/Home";
import TopBar from "./Components/TopBar/TopBar";
import Write from "./Pages/Write/Write";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Story from "./Pages/Story/Story";
import Future from "./Pages/Future/Future";
import Gallery from "./Pages/Gallery/Gallery";
import EarlyPage from "./Pages/Relationship/EarlyPage/EarlyPage";
import MidPage from "./Pages/Relationship/MidPage/MidPage";
import LatePage from "./Pages/Relationship/LatePage/LatePage";
import AnniversaryPage from "./Pages/Relationship/AnniversaryPage/AnniversaryPage";
import Footer from "./Components/Footer/Footer";
import SinglePage from "./Pages/Relationship/SinglePage/SinglePage";

function App() {

  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<SinglePage /> } />
        <Route path="/story" element={<Story /> } />
        <Route path="/future" element={<Future /> } />
        <Route path="/gallery" element={<Gallery /> } />
        <Route path="/early" element={<EarlyPage /> } />
        <Route path="/mid" element={<MidPage /> } />
        <Route path="/late" element={<LatePage /> } />
        <Route path="/anniversary" element={<AnniversaryPage /> } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
