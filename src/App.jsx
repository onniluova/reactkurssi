import './App.css';
import { Route, BrowserRouter as Router, Routes, Link} from "react-router-dom";
import Home from './components/home';
import {Profile} from "./components/Profile.jsx";

const App = () => {
  return (
    <>
      <Router>
        <h1>My App</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/profile">Profiili</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
