import { Link } from "react-router-dom";
import CartDisplay from "./CartDisplay";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">Grantiques</Link>
      </h1>

      <Link to="about" className="button">
        About
      </Link>

      <Link to="shop" className="button">
        Shop
      </Link>

      <CartDisplay cart={[1, 1, 1]} />
    </header>
  );
};

export default Header;
