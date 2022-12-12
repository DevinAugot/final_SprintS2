import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

const Header = ({ title, body }) => {
    const location = useLocation();
  return (
    <div className ="header">
      
      <h1 className="h1"> <img id="img1"src="./images/finalLogo.png"></img>{title}</h1>
      {location.pathname !== "/"}
    </div>
  );
};
Header.defaultProps = {
  title: "InstaCode",
  body: "SOme default text here...",
};

Header.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
};

export default Header;
