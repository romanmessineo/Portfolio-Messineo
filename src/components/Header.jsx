import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Header = () => {
  const linkConfig = {
    smooth: true,
  };

  return (
    <header className="py-8">
      <motion.div
        variants={fadeIn("right", 0.7)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="container mx-auto"
      >
        <div className=" flex justify-between">
          <Link to="about" {...linkConfig}>
            <h2
              className="p text-[36px] font-bold cursor-pointer"
              title="acerca mí"
            >
              Román Messineo
            </h2>
          </Link>
          <Link to="contact" {...linkConfig}>
            <button className="btn btn-sm" title="contacto">
              Trabaja conmigo
            </button>
          </Link>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
