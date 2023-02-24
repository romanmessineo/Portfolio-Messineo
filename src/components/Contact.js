
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import Cv from "../assets/Roman Messineo.pdf"

//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

const Contact = () => {

//service_fpd7h4b
const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();      
    
    emailjs.sendForm('service_fpd7h4b', 'template_x3nskns', form.current, 'QkOLhZ8nm-s9HTM43')
    .then((result) => {
      alert("El mensaje se ha enviado correctamente")
      ;console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
  <section className='py-16 lg:section' id='contact'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* text */}
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.3}} 
        className='flex-1 flex justify-start items-center'>
          <div>
            <h4 className='text-xl uppercase text-green-500 font-medium mb-2 tracking-wide' >Get in touch</h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12 '>Trabajemos <br /> juntos!
            </h2>
            <button className='btn btn-lg'
          type="submit"
          value="Send"
          ><a href="https://api.whatsapp.com/send?phone=543424767722" target="_blank">WhatsApp</a>
</button>
<button className='btn btn-lg'
          type="submit"
          value="Send"
          ><a href={Cv} download target="_blank">Descargar CV</a>

</button>

<button className='btn btn-lg'
          type="submit"
          value="Send"
          ><a href="mailto:messineoroman@gmail.com" target="_blank">Enviar Mail</a>

</button>
          </div>
          
        </motion.div>
        {/* form */}
        <motion.form 
        ref={form}
        onSubmit={sendEmail}
        variants={fadeIn('left', 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.3}} 
        className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start field'>
          <input 
          className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-green-500 transition-all '
          type="text" 
          name="user_name"
          placeholder='Ingrese su nombre'
          />
          <input 
          className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-green-500 transition-all '
          type="email" 
          name="user_email"
          placeholder='Ingrese su e-mail'
          />
          <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-green-500 transition-all resize-none mb-12'
          name="message"
          placeholder='Escriba su mensaje'
          ></textarea>
          <button className='btn btn-lg'
          type="submit"
          value="Send"
          >Enviar mensaje</button>
          </motion.form>
      </div>

      
    
    </div>
  </section>
  );
};

export default Contact;
