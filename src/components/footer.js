import Logo from "../../src/assets/image/Dystech-rectangle-white-240x70@3x.png";
import Love from "../../src/assets/image/heart-full-outline@3x.png";
const Footer =() => {
    return (

        <div className="footer_con">
          <img src={Logo} alt=""/>
          
          <div className="footer_sec">
          <a href="-">privacy Policy </a><img src={Love} alt=""/><p> Made with love by Dystech</p>
          </div>
        </div>

    );
};
export default Footer;