import FeatherIcon from "feather-icons-react";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="ques">
          <h3>Questions?<a href=""> Call 000-800-040-1843</a></h3>
        </div>
        <div className="col">
          <div className="col_1">
            <ul>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">Investor</a>
              </li>
              <li>
                <a href="">Privacy</a>
              </li>
              <li>
                <a href="">Speed Test</a>
              </li>
            </ul>
          </div>
          <div className="col_1">
            <ul>
              <li>
                <a href="">Help Center</a>
              </li>
              <li>
                <a href="">Job</a>
              </li>
              <li>
                <a href="">Cookies preference</a>
              </li>
              <li>
                <a href="">Legal Notices</a>
              </li>
            </ul>
          </div>
          <div className="col_1">
            <ul>
              <li>
                <a href="">Account</a>
              </li>
              <li>
                <a href="">Way To watch</a>
              </li>
              <li>
                <a href="">Corporate Information</a>
              </li>
              <li>
                <a href="">Netflix Originals</a>
              </li>
            </ul>
          </div>
          <div className="col_1">
            <ul>
              <li>
                <a href="">Media Center</a>
              </li>
              <li>
                <a href="">Terms Of Use</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">Speed Test</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="language">
          <div class="dropdown">
            <button class="dropbtn"><FeatherIcon icon="globe" className="globe" /> English<FeatherIcon icon="chevron-down" className="globe" /> </button>
            <div class="dropdown-content">
              <a href="#">English</a>
              <a href="#">Hindi</a>
            </div>
          </div>
        </div>
        <div className="small">
          <small>Netflix India</small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
