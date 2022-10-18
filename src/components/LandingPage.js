import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div id="LandingPage">
      <div className="SearchBegins">
        <div>Your Search Begins</div>
        <Link to="shop" className="button">
          Here
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
