import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from "../variants";

const Services = () => {
  return (
    <section className="section" id='services'>
      <div className="container mx-auto ">

    {/* galeria */}



      <div className="overflow-hidden text-neutral-700 ">
  <div className="container mx-auto px-2 py-2 lg:pt-12 ">
    <div className="flex flex-col gap-y-8 lg:flex-row items-center lg:gap-x-12">
      <div className="flex lg:w-1/2 md:w-max flex-rap">
        <div className="w-full p-1 md:p-1">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
        </div>
      </div>
      <div className="flex lg:w-1/2 md:w-max flex-rap">
        <div className="w-full p-1 md:p-1">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
        </div>
      </div>
      <div className="flex lg:w-1/2 md:w-max flex-rap">
        <div className="w-full p-1 md:p-1">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
        </div>
      </div>

    </div>
  </div>
      </div>
    <motion.div
   variants={fadeIn("left", 0.5)}
   initial="hidden"
   whileInView={"show"}
   viewport={{ once: false, amount: 0.7 }}
    className="flex flex-col lg:flex-row gap-x-12"
  >
    <div className="w-full lgl:w-1/2">
      <div className="py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px] uppercase">
          Features
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">Design Skill</h2>
      </div>
      <div className='className="mt-14 w-full flex flex-col gap-6'>
        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">Photoshot</p>
          <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
            <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                    
              className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0">100%</span>
            </motion.span>
          </span>
        </div>
        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">Figma</p>
          <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0">90%</span>
            </motion.span>
          </span>
        </div>
        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">Adobe XD.</p>
          <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0">60%</span>
            </motion.span>
          </span>
        </div>
        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">Adobe Illustrator</p>
          <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0">70%</span>
            </motion.span>
          </span>
        </div>
        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">Design</p>
          <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0">95%</span>
            </motion.span>
          </span>
        </div>
      </div>
    </div>

    <div className="w-full lgl:w-1/2">
      <div className="py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px] uppercase">
          Features
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">Development Skill</h2>
      </div>
      <div className="flex flex-col gap-6">
        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">React</p>
          <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0">100%</span>
            </motion.span>
          </span>
        </div>
        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">HTML 5</p>
          <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0">95%</span>
            </motion.span>
          </span>
        </div>
        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">CSS3</p>
          <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0">80%</span>
            </motion.span>
          </span>
        </div>
        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">JAVASCRIPT</p>
          <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0">75%</span>
            </motion.span>
          </span>
        </div>
        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">SOFTWARE</p>
          <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0">90%</span>
            </motion.span>
          </span>
        </div>
      </div>
      
    </div>

    
  </motion.div>
      </div>

      

      

    </section>

    

  );
};

export default Services;
