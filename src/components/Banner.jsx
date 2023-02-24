import React from "react";
import styles from "../components/Banner.module.css"
//imagenes
import Image from "../assets/bannerImg.png";
import Image2 from "../assets/about.png";
//icons
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";
//type animation
import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center "
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[100px] "
            >
              Roman <span>Messineo</span>
            </motion.h1>
            <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1] ">
              <span className="text-white mr-4">Soy</span>
              <TypeAnimation
                sequence={[
                  "Desarroyador",
                  2000,
                  "",
                  2000, 
                ]}
                speed={50}
                className="text-green-500"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p 
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="mb-8 max-w-lg mx-auto lg:mx-0">
              Autodidacta que acaba de graduarse de CoderHouse. Aunque tengo poca experiencia, siempre he sentido fascinación por el desarrollo web y me gusta estar actualizado sobre las últimas tendencias y tecnologías.
            </motion.p>
            <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <button className="btn btn-lg"> Contactame</button>
              <a href="#" className="text-gradient btn-link">
                Mi portafolio
              </a>
            </motion.div>
            {/* socials */}
            <motion.div 
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex text-[40px] gap-x-6 max-w-max mx-auto lg:mx-0 ">
              <a href="#" className={styles.social}>
                <FaGithub/>
              </a>
              <a href="#">
                <FaLinkedin className={styles.social} />
              </a>
              <a href="#">
                <FaFacebook className={styles.social} />
              </a>
              <a href="#">
                <FaWhatsapp className={styles.social} />
              </a>
            </motion.div >
          </div>
          {/* imagen */}
          <motion.div 
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          /* viewport={{ once: false, amount: 0.7 }} */
          className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] ">
            <img src={Image}  alt="Foto de perfil Roman" className={styles.imgHover} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
