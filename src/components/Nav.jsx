import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";
import { Link } from "react-scroll";

const NavItem = ({ to, title, children }) => {
  const linkConfig = {
    smooth: true,
    spy: true,
  };

  return (
    <Link to={to} className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center" activeClass="active" title={title} {...linkConfig}>
      {children}
    </Link>
  );
};

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto flex">
        <div className="w-full bg-black/60 h-[96px] blackdrop-blur-3xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
          <NavItem to="home" title="home"><BiHomeAlt /></NavItem>
          <NavItem to="about" title="about"><BiUser /></NavItem>
          <NavItem to="services" title="skills"><BsClipboardData /></NavItem>
          <NavItem to="work" title="works"><BsBriefcase /></NavItem>
          <NavItem to="contact" title="contact"><BsChatSquareText /></NavItem>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
