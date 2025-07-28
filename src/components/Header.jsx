import LeftLogo from "../assets/logos/gateIITRoorke_Logo.png";
import RightLogo from "../assets/logos/iitRoorke.png";

const Header = () => (
  <div className="w-full flex items-center justify-between mt-2 px-16">
    <img src={LeftLogo} alt="Logo" className="max-w-[12rem] object-contain" />
    <div className="text-center font-bold text-4xl text-[#1e280c] leading-12">
      <h1 className="uppercase">Graduate Aptitude Test in Engineering 2025</h1>
      <h2>अभियांत्रिकी स्नातक अभिक्षमता परीक्षा 2025</h2>
      <h3 className="text-2xl">
        Organising Institute: INDIAN INSTITUTE OF TECHNOLOGY ROORKEE
      </h3>
    </div>
    <img src={RightLogo} alt="Logo" className="max-w-[12rem] object-contain" />
  </div>
);

export default Header;
