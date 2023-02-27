import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/desarrollo web.png";
import Img2 from "../assets/JavaScript.png";
import Img3 from "../assets/react.png";
import { useState, useEffect } from "react";
import VisibilitySensor from "react-visibility-sensor";

const Services = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);




  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const [isVisible, setIsVisible] = useState(false);



  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
  
    window.addEventListener("resize", handleResize);
  
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  




  const handleVisibilityChange = (isVisible) => {
    setIsVisible(isVisible);
  };

  return (
    <section className="flex  bg-contain" id="services">
      <div className="container mx-auto">
        {/* galeria */}

        <div className="overflow-hidden">
          <div className="container mx-auto px-2 py-2 lg:pt-4 ">
          <motion.div 
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex ">
          <div className="py-12 font-titleFont flex flex-col gap-2">
                <h2 className="h2 leading-tight text-green-500 text-center lg:text-left">
                Habilidades
                </h2>
                <p className="h2 mb-[-10px] text-sm uppercase font-medium  ">
                Soy un profesional comunicativo y eficiente en la resolución creativa de problemas, con un enfoque en identificar oportunidades de ahorro de costos para la empresa o cliente. Utilizo mi pensamiento crítico para tomar decisiones informadas y estoy comprometido con la mejora continua y la innovación.
                  </p>
              </div>
            
          </motion.div>      

            <motion.p 
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="h3 pb-0 text-3xl md:text-4xl font-bold text-center">

              Certificados
            </motion.p>


            {/* img coder */}
            <div className="flex  flex-col gap-y-8 md:flex-row items-center lg:gap-x-12 ">
              <motion.div
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex lg:w-1/2 md:w-max flex-rap"
              >
                <div className="w-full p-1 md:p-1">
                  <img
                    alt="gallery"
                    className="block lg:max-h-[350px] h-full w-full rounded-lg object-cover object-center transform transition duration-500 lg:hover:scale-110 cursor-pointer"
                    src={Img1}
                    onClick={() => {
                      setFullscreenImage(Img1);
                      setIsFullscreen(true);
                    }}
                  />
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn("down", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex lg:w-1/2 md:w-max flex-rap"
              >
                <div className="w-full p-1 md:p-1">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center transform transition duration-500 lg:hover:scale-110 cursor-pointer"
                    src={Img2}
                    onClick={() => {
                      setFullscreenImage(Img2);
                      setIsFullscreen(true);
                    }}
                  />
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn("left", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex lg:w-1/2 md:w-max flex-rap"
              >
                <div className="w-full p-1 md:p-1">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center transform transition duration-500 lg:hover:scale-110 cursor-pointer"
                    src={Img3}
                    onClick={() => {
                      setFullscreenImage(Img3);
                      setIsFullscreen(true);
                    }}
                  />
                </div>
              </motion.div>

              {!isMobile && isFullscreen && (
                <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50">
                  <div
                    className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-500 cursor-pointer"
                    onClick={() => setIsFullscreen(false)}
                  />
                  <img
                    alt="fullscreen"
                    className="max-h-screen max-w-screen object-contain cursor-pointer"
                    src={fullscreenImage}
                    onClick={() => setIsFullscreen(false)}
                  />
                </div>
              )}
            </div>


            
        <div className="flex flex-col px-12 ">
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-col lg:flex-row gap-x-12"
          >
           
              <div className='mt-14 w-full flex flex-col gap-2'>
              <div className="pt-2 font-titleFont flex flex-col gap-2">
                <h2 className="h3 text-3xl md:text-4xl font-bold text-center ">
                  Tecnologías utilizadas
                </h2>
              </div>
                <div className="overflow-x-hidden">
                  <p className="h3 mb-[-10px] text-sm uppercase font-medium  ">
                    html
                  </p>
                  <VisibilitySensor onChange={handleVisibilityChange}>
                    <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                      <motion.span
                        initial={{ x: "-100%", opacity: 0 }}
                        animate={isVisible ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                      >
                        <span className="p absolute -top-7 right-0">90%</span>
                      </motion.span>
                    </span>
                  </VisibilitySensor>
                </div>

                <div className="overflow-x-hidden">
                  <p className="h3 mb-[-10px] text-sm uppercase font-medium">
                    css
                  </p>
                  <VisibilitySensor onChange={handleVisibilityChange}>
                    <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                      <motion.span
                        initial={{ x: "-100%", opacity: 0 }}
                        animate={isVisible ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                      >
                        <span className="p absolute -top-7 right-0">80%</span>
                      </motion.span>
                    </span>
                  </VisibilitySensor>
                </div>

                <div className="overflow-x-hidden">
                  <p className="h3 mb-[-10px] text-sm uppercase font-medium">
                    sass
                  </p>
                  <VisibilitySensor onChange={handleVisibilityChange}>
                    <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                      <motion.span
                        initial={{ x: "-100%", opacity: 0 }}
                        animate={isVisible ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                      >
                        <span className="p absolute -top-7 right-0">75%</span>
                      </motion.span>
                    </span>
                  </VisibilitySensor>
                </div>

                <div className="overflow-x-hidden">
                  <p className="h3 mb-[-10px] text-sm uppercase font-medium ">
                    javascript
                  </p>
                  <VisibilitySensor onChange={handleVisibilityChange}>
                    <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                      <motion.span
                        initial={{ x: "-100%", opacity: 0 }}
                        animate={isVisible ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative "
                      >
                        <span className="p absolute -top-7 right-0">80%</span>
                      </motion.span>
                    </span>
                  </VisibilitySensor>
                </div>

                <div className="overflow-x-hidden">
                  <p className="h3 mb-[-10px] text-sm uppercase font-medium">
                    React Js
                  </p>
                  <VisibilitySensor onChange={handleVisibilityChange}>
                    <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                      <motion.span
                        initial={{ x: "-100%", opacity: 0 }}
                        animate={isVisible ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                      >
                        <span className="p absolute -top-7 right-0">95%</span>
                      </motion.span>
                    </span>
                  </VisibilitySensor>
                </div>

                <div className="overflow-x-hidden">
                  <p className="h3 mb-[-10px] text-sm uppercase font-medium">
                    node
                  </p>
                  <VisibilitySensor onChange={handleVisibilityChange}>
                    <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                      <motion.span
                        initial={{ x: "-100%", opacity: 0 }}
                        animate={isVisible ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="w-[50%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                      >
                        <span className="p absolute -top-7 right-0">50%</span>
                      </motion.span>
                    </span>
                  </VisibilitySensor>
                </div>

                <div className="overflow-x-hidden">
                  <p className="h3 mb-[-10px] text-sm uppercase font-medium">
                    Git
                  </p>
                  <VisibilitySensor onChange={handleVisibilityChange}>
                    <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                      <motion.span
                        initial={{ x: "-100%", opacity: 0 }}
                        animate={isVisible ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                      >
                        <span className="p absolute -top-7 right-0">95%</span>
                      </motion.span>
                    </span>
                  </VisibilitySensor>
                </div>

                <div className="overflow-x-hidden">
                  <p className="h3 mb-[-10px] text-sm uppercase font-medium">
                    firebase
                  </p>
                  <VisibilitySensor onChange={handleVisibilityChange}>
                    <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                      <motion.span
                        initial={{ x: "-100%", opacity: 0 }}
                        animate={isVisible ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                      >
                        <span className="p absolute -top-7 right-0">80%</span>
                      </motion.span>
                    </span>
                  </VisibilitySensor>
                </div>

              </div>
            </motion.div>
          





          




        </div>
          </div>
        </div>

        {/* div Skills */}
      </div>
    </section>
  );
};

export default Services;
