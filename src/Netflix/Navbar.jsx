import logo from "../Images/logo.png";
import FeatherIcon from "feather-icons-react";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo can't load" />
      </div>
      <div className="btn">
        <div className="language">
          <div class="dropdown">
            <button class="dropbtn"><FeatherIcon icon="globe" className="globe" /> English<FeatherIcon icon="chevron-down" className="globe" /> </button>
            <div class="dropdown-content">
              <a href="#">English</a>
              <a href="#">Hindi</a>
            </div>
          </div>
        </div>
        <div className="sign_in">
          <button> Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
