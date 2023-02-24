import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import {motion} from "framer-motion"
import {fadeIn} from "../variants"

const About = () => {
const [ref, inView] = useInView({
  threshold:0.5,
});

  return (
  <div className='section' id='about' ref={ref}>
    <div className="container mx-auto">
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
      {/* img */}
      <motion.div 
      variants={fadeIn('right', 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false, amount:0.3}} 
      className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top '></motion.div>
      {/* text */}
      <motion.div 
      variants={fadeIn('left', 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false, amount:0.3}} 
      className='flex-1'>
        <h2 className='h2 text-green-500'>Acerca de mi.</h2>
        <h3 className='h3 mb-4'>
        Como desarrollador, me enfoco en optimizar los procesos y obtener mejores resultados en cada uno de mis proyectos. También me apasiona el diseño y la creación de experiencias de usuario intuitivas y atractivas.
        </h3>
        <p className='mb-6'>
        Siempre busco aprender y mejorar. Me encanta escribir código y no tengo problema en dedicar horas a resolver problemas y mejorar la funcionalidad de mis proyectos.
        </p>
      <div className='flex gap-x-8 items-center'>
        <button className='btn btn-lg'>Contacto</button>
        <a href="#" className='text-gradient btn-link'>
          Mi portfolio
        </a>
      </div>

      </motion.div>
      </div>
      
      </div> 
  </div>
);
};

export default About;
