export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      opacity: 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

/* 
variants={fadeIn("up", 0.4)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.7 }}
 */

    /* 
    variants={{hidden:{ x: "-100%", opacity: 0 }}}
    animate={{show:{x: 0, opacity: 1}}}
    transition= {{
        type: 'tween',
        duration: 0.5,
        delay: 0.5,
        ease: [0.25, 0.25, 0.25, 0.75],
      }}
    
    
    
    */