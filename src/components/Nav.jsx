import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";
import { Link } from "react-scroll";

const Nav = () => {

  const linkConfig = {
    smooth: true,
    spy: true,
    
  };

  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto flex">
        <div className="w-full bg-black/20 h-[96px] blackdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
          <Link to="home"  
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          activeClass="active" title="home" offset={-200} {...linkConfig}>
            <BiHomeAlt />
          </Link>
          <Link to="about"  
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          activeClass="active" title="about" {...linkConfig}>
            <BiUser />
          </Link>
          <Link to="services"  
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          activeClass="active" title="skills" {...linkConfig}>
            <BsClipboardData />
          </Link>
          <Link to="work"  
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          activeClass="active" title="works" {...linkConfig}>
            <BsBriefcase />
          </Link>
          <Link to="contact" 
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          activeClass="active" title="contact"{...linkConfig}>
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
