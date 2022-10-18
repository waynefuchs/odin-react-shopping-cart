import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <h1>Grantiques</h1>

      <Link to="about" className="button">
        About
      </Link>

      <Link to="shop" className="button">
        Shop
      </Link>

      <span className="material-icons">shopping_cart</span>
    </header>
  );
};

export default Header;
