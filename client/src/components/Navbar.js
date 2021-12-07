import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  const logout = () => {
    // window.open("http://localhost:4001/auth/logout", "_self");
    window.open(
      "https://intensify-exercise.herokuapp.com/auth/logout",
      "_self"
    );
  };

  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to="/">
          Intensify
        </Link>
      </span>
      {user ? (
        <ul className="list">
          <li className="listItem">
            <img
              src={user.photos[0].value}
              alt={user.displayName}
              className="avatar"
            />
          </li>
          <li className="listItem">Welcome, {user.displayName}</li>
          <li className="listItem logout" onClick={logout}>
            Logout
          </li>
        </ul>
      ) : (
        <Link className="link login" to="/login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
