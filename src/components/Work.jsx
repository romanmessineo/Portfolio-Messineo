import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Styles from "../components/Work.module.css"
//img
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";
import Monky from "../assets/MonkyBits.webm"
import AppTransp from "../assets/App Transport Manager.webm"
import TeslaStore from "../assets/Tesla Herramientas.webm"

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div 
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount:0.3}} 
          className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-green-500">
                Mis<br />
                Trabajos
              </h2>
              <p className="max-w-sm mb-8">
                Estos son mis primeros proyectos.
                Con ellos me recibi en ConderHouse como desarrollador Front-End. Humildemente te los muestro y en un futuro voy a seguir subiendo nuevos y mejores trabajos. 
              </p>
              <button className="btn btn-sm">Ver todos los proyectos</button>
            </div>
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              {/* <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div> */}
              {/* img */}
              <video 
              /* width="640" height="360"  */controls autoplay 
              /* className="group-hover:scale-125 transition-all duration-500" */
              className=" w-full h-full">
              
              <source src={Monky}/> 
                
                </video>
              {/* pretittle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 bg-black/40">
                <span className="text-gradient">Curso HTML - CoderHouse</span>
              </div>
              {/* tittle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3x1 text-white"> MonkyBits Store</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
          variants={fadeIn('left', 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount:0.3}} 
          className="flex-1 flex flex-col gap-y-10">
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              {/* <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div> */}
              {/* img */}
              <video
              /* width="640" height="360"  */controls autoplay  
                /* className="group-hover:scale-125 transition-all duration-500" */
                className=" w-full h-full">
                <source src={AppTransp}/> 
                
                </video>
              {/* pretittle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
                <span className="text-gradient">Curso HTML - CoderHouse</span>
              </div>
              {/* tittle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3x1 text-white"> MonkyBits Store</span>
              </div>
            </div>
             {/* image */}
             <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              {/* <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div> */}
              {/* img */}
              <video
              /* width="640" height="360"  */controls autoplay 
              /* className="group-hover:scale-125 transition-all duration-500" */
              /* className={Styles.video} */>
              <source src={TeslaStore}/> 
                
              </video>
              {/* pretittle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
                <span className="text-gradient">Curso HTML - CoderHouse</span>
              </div>
              {/* tittle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3x1 text-white"> MonkyBits Store</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
