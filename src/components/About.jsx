import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";


const About = () => {
  const linkConfig = {
    smooth: true,
    spy: true,
  };



  return (
    <section className="section" id="about">


      <div className="container mx-auto">
        <div className="flex flex-col pb-4 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 ">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            // eslint-disable-next-line no-template-curly-in-string
            className="flex-1 min-h-[350px] bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top "
          >

          </motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-green-500">Acerca mí.</h2>
            <h3 className="h3 mb-1">
              Como desarrollador, me enfoco en optimizar los procesos para
              obtener resultados superiores en cada uno de mis proyectos.
            </h3>
            <p className="p mb-6">
              Siento pasión por el diseño y la creación de experiencias de
              usuario intuitivas y atractivas, siempre estoy en busca de
              aprender y mejorar en este campo. En mi tiempo libre, disfruto
              leyendo artículos y blogs sobre tecnología, así como también
              trabajando en proyectos personales para mejorar y desarrollar
              nuevas técnicas. Siempre estoy buscando nuevas oportunidades para
              aprender y crecer.
            </p>
            <div className="flex gap-x-8 items-center">
              <Link to="contact" {...linkConfig}>
                <button className="btn btn-lg" title="contacto">
                  Contacto
                </button>
              </Link>
              <Link
                to="work"
                {...linkConfig}
                className="text-gradient btn-link"
                title="trabajos"
              >
                Mi portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </div>


    </section>
  );
};

export default About;
