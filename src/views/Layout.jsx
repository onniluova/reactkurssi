import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <h1>My App</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/upload">Upload</Link>
      </nav>
      <Outlet />
    </>
  );
}
