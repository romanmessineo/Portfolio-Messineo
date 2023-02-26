import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";
import { Link } from "react-scroll";

const Nav = () => {
  const linkConfig = {
    smooth: true,
    spy: true,
    className:
      "cursor-pointer w-[60px] h-[60px] flex items-center justify-center",
  };

  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50 mr-auto">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[96px] blackdrop-blur-3xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
          <Link to="home" activeClass="active" title="home" offset={-200} {...linkConfig}>
            <BiHomeAlt />
          </Link>
          <Link to="about" activeClass="active" title="about" {...linkConfig}>
            <BiUser />
          </Link>
          <Link to="services" activeClass="active" title="skills" {...linkConfig}>
            <BsClipboardData />
          </Link>
          <Link to="work" activeClass="active" title="works" {...linkConfig}>
            <BsBriefcase />
          </Link>
          <Link to="contact" activeClass="active" title="contact"{...linkConfig}>
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
