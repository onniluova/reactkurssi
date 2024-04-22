import './App.css';
import Home from './views/home.jsx';
import {Link, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import {Profile} from "./views/Profile.jsx";
import Upload from "./views/Upload.jsx";
import Single from "./views/Single.jsx";

const App = () => {
  return (
    <>
      <Router>
        <h1>My App</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/profile">Profiili</Link>
          <Link to="/upload">Lataa</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/upload' element={<Upload/>}></Route>
          <Route path="/meida/:id" element={<Single />}></Route>
        </Routes>
      </Router>
    </>
  );
};
export default App;
