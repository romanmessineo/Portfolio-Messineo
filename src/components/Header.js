import Logo from "../assets/logo.svg"
import { fadeIn } from "../variants";
import { motion } from "framer-motion";

const Header = () => {
  return (
  
  <header className='py-8'>
    <motion.div 
    variants={fadeIn("right", 0.7)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.7 }}
    className="container mx-auto">
      <div className=" flex justify-end">
        {/* <a href="#">
          <img src={Logo} alt="logo Roman" />

        </a> */}

      <button className="btn btn-sm"> Trabaja conmigo</button>
      </div>

      
    </motion.div>
  
  
  
  
  </header>
)
};

export default Header;
