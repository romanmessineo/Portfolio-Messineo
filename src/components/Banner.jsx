import React from "react";
import styles from "../components/Banner.module.css";
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";
//imagenes
import Image from "../assets/bannerImg3.png";

//icons
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
//type animation
import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

const Banner = () => {
  const linkConfig = {
    smooth: true,
  };

  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center "
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-6">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="p text-[32px] leading-[0.8] lg:text-[62px] "
            >
              Hola! <br />
              Gracias por visitarme
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 text-[36px] lg:text-[60px] lg:h-28 min-height font-secondary font-semibold uppercase leading-[1] "
            >
              <span className="text-white m-auto">Soy </span>
              <TypeAnimation
                sequence={["desarrollador front end", 2000, "", 2000]}
                speed={50}
                className="p text-green-500"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="p mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Autodidacta que acaba de graduarse de CoderHouse. Aunque tengo
              poca experiencia, siempre he sentido fascinación por el desarrollo
              web y me gusta estar actualizado sobre las últimas tendencias y
              tecnologías.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <Link
                to="https://goo.gl/maps/Y7MDQKSXgohQ4Tmf7"
                target="_blank"
                title="mi ubicación"
              >
                <button className="btn btn-lg">
                  {" "}
                  <FaMapMarkerAlt />
                </button>
              </Link>

              <LinkRoll
                to="work"
                {...linkConfig}
                className="text-gradient btn-link hover:cursor-pointer"
              >
                Mi portafolio
              </LinkRoll>
            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[40px] gap-x-6 max-w-max mx-auto lg:mx-0 "
            >
              <Link
                to="https://github.com/romanmessineo"
                target="_blank"
                title="github"
              >
                <FaGithub className={styles.social} />
              </Link>
              <Link
                to="https://www.linkedin.com/in/rom%C3%A1n-messineo-591876183/"
                target="_blank"
                title="linkedin"
              >
                <FaLinkedin className={styles.social} />
              </Link>
              <Link
                to="mailto:messineoroman@gmail.com?Subject=Portfolio%20"
                target="_blank"
                title="g-mail"
              >
                <SiGmail title="g-mail" className={styles.social} />
              </Link>
              <Link
                to="https://api.whatsapp.com/send?phone=+543424767722&text=Hola.%20Vi%20tu%20portfolio."
                title="whatsapp"
                target="_blank"
              >
                <FaWhatsapp className={styles.social} />
              </Link>
            </motion.div>
          </div>
          {/* imagen */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="hidden lg:flex flex-1 max-w-[260px] lg:max-w-[360px] "
          >
            <img
              src={Image}
              alt="Foto de perfil Roman"
              className={styles.imgHover}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
