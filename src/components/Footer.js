import "./Footer.css";

import facebook from "../img/brands/facebook.svg";
import tiktok from "../img/brands/tiktok.svg";
import instagram from "../img/brands/instagram.svg";
import youtube from "../img/brands/youtube.svg";
import whatsapp from "../img/brands/whatsapp.svg";
import pinterest from "../img/brands/pinterest.svg";
import reddit from "../img/brands/reddit.svg";
import twitter from "../img/brands/twitter.svg";

const Footer = () => {
  return (
    <footer>
      <div className="socials">
        <img src={facebook} alt="facebook" className="brand-img" />
        <img src={tiktok} alt="tiktok" className="brand-img" />
        <img src={instagram} alt="instagram" className="brand-img" />
        <img src={youtube} alt="youtube" className="brand-img" />
        <img src={whatsapp} alt="whatsapp" className="brand-img" />
        <img src={pinterest} alt="pinterest" className="brand-img" />
        <img src={reddit} alt="reddit" className="brand-img" />
        <img src={twitter} alt="twitter" className="brand-img" />
      </div>

      <div className="greybar">
        <div>
          © 2022 Michigan official cooperative of Antiquing Roadtrip Goodtime
          organization that doesn't really exist ™
        </div>
        <div>269-123-1234</div>
      </div>
    </footer>
  );
};

export default Footer;