import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import styles from "../components/Banner.module.css";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { Link } from "react-router-dom";
import Monky from "../assets/MonkyBits.webm";
import AppTransp from "../assets/App Transport Manager.webm";
import TeslaStore from "../assets/Tesla Herramientas.webm";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        {/* textos */}
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0 bg-contain"
          >
            {/* text */}
            <div className="flex flex-col">
              <div className="max-w-sm mx-auto lg:max-w-none lg:w-2/3">
                <h2 className="h2 leading-tight text-green-500 text-center lg:text-left">
                  Mis
                  <br />
                  Trabajos
                </h2>
                <p className="p mb-6 text-center lg:text-left">
                  Estos proyectos son mis primeros logros como desarrollador
                  Front-End, y fueron clave para graduarme en ConderHouse.
                  Actualmente estoy buscando oportunidades de trabajo tanto en
                  relación de dependencia como en proyectos freelance. Me
                  emociona la idea de enfrentar nuevos desafíos y seguir
                  creciendo como desarrollador.
                </p>
              </div>
            </div>

            {/* image */}
            <div>
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                <video controls autoplay className=" w-full h-full">
                  <source src={Monky} />
                </video>
                {/* pretittle */}

                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span
                    className="text-gradient"
                    style={{
                      textShadow: "2px 2px 12px rgba(0, 0, 0, 0.8)",
                      WebkitTextStroke: "1px #000",
                      textStroke: "1px #000",
                    }}
                  >
                    Curso HTML - CoderHouse
                  </span>
                </div>
                {/* tittle */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white relative">
                    <span
                      className="absolute inset-0"
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        filter: "blur(12px)",
                        zIndex: "-1",
                      }}
                    ></span>
                    MonkyBits Store
                  </span>
                </div>
              </div>
              <div className="flex justify-center">
                <Link
                  to="https://github.com/romanmessineo/venta-placas-video/tree/bootstrap-v1"
                  target="_blank"
                  title="github"
                  className="flex items-center mt-2 mr-4"
                >
                  <FaGithub className={`${styles.social} mr-2`} />
                  <span className="text-white text-lg font-medium ml-1 mt-1">
                    Ver código
                  </span>
                </Link>
                <Link
                  to="https://romanmessineo.github.io/venta-placas-video/"
                  target="_blank"
                  title="web"
                  className="flex items-center mt-2"
                >
                  <TbWorld className={`${styles.social} mr-2`} />
                  <span className="text-white text-lg font-medium ml-1 mt-1">
                    Visitar web
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col  lg:justify-end"
          >
            {/* image */}
            
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                <video controls autoplay className=" w-full h-full">
                  <source src={AppTransp} />
                </video>
                {/* pretittle */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
                  <span
                    className="text-gradient"
                    style={{
                      textShadow: "2px 2px 12px rgba(0, 0, 0, 0.8)",
                      WebkitTextStroke: "1px #000",
                      textStroke: "1px #000",
                    }}
                  >
                    Curso Javascrip - CoderHouse
                  </span>
                </div>
                {/* tittle */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white relative">
                    <span
                      className="absolute inset-0"
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        filter: "blur(12px)",
                        zIndex: "-1",
                      }}
                    ></span>
                    App de transporte
                  </span>
                </div>
              </div>
              <div className="flex justify-center lg:mb-4">
                <Link
                  to="https://github.com/romanmessineo/Curso-Javascript/tree/feature-5"
                  target="_blank"
                  title="github"
                  className="flex items-center mt-2 mr-4"
                >
                  <FaGithub className={`${styles.social} mr-2`} />
                  <span className="text-white text-lg font-medium ml-1 mt-1">
                    Ver código
                  </span>
                </Link>
                <Link
                  to="https://romanmessineo.github.io/Curso-Javascript/"
                  target="_blank"
                  title="web"
                  className="flex items-center mt-2"
                >
                  <TbWorld className={`${styles.social} mr-2`} />
                  <span className="text-white text-lg font-medium ml-1 mt-1">
                    Visitar web
                  </span>
                </Link>
              </div>
            
            {/* image */}

           
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                {/* video */}
                <video controls autoplay>
                  <source src={TeslaStore} />
                </video>

                {/* pretittle */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
                  <span
                    className="text-gradient"
                    style={{
                      textShadow: "2px 2px 12px rgba(0, 0, 0, 0.8)",
                      WebkitTextStroke: "1px #000",
                      textStroke: "1px #000",
                    }}
                  >
                    Curso React Js - CoderHouse
                  </span>
                </div>

                {/* tittle */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white relative">
                    <span
                      className="absolute inset-0"
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        filter: "blur(12px)",
                        zIndex: "-1",
                      }}
                    ></span>
                    Store de herramientas
                  </span>
                </div>
              </div>

              {/* links */}
              <div className="flex justify-center">
                <Link
                  to="https://github.com/romanmessineo/curso-reactJs-Tesla-App/tree/main"
                  target="_blank"
                  title="github"
                  className="flex items-center mt-2 mr-4"
                >
                  <FaGithub className={`${styles.social} mr-2`} />
                  <span className="text-white text-lg font-medium ml-1 mt-1">
                    Ver código
                  </span>
                </Link>
                <Link
                  to="https://teslastore-cursoreactjs.web.app/"
                  target="_blank"
                  title="web"
                  className="flex items-center mt-2"
                >
                  <TbWorld className={`${styles.social} mr-2`} />
                  <span className="text-white text-lg font-medium ml-1 mt-1">
                    Visitar web
                  </span>
                </Link>
              </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
