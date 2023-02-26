import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import Cv from "../assets/Roman Messineo.pdf";
import { Link } from "react-router-dom";
import styles from "../components/Banner.module.css";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsFillShareFill, BsDownload } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/whatsappqrlink.png";

const Contact = () => {
  const share = async (event) => {
    event.preventDefault();
    try {
      await navigator.share({
        title: "Portfolio Roman Messineo",
        url: "http://localhost:3000/",
      });
      console.log("Contenido compartido con éxito");
    } catch (error) {
      console.log("Error al compartir contenido", error);
    }
  };

  const form = useRef();

  const [formValues, setFormValues] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fpd7h4b",
        "template_x3nskns",
        form.current,
        "QkOLhZ8nm-s9HTM43"
      )
      .then(
        (result) => {
          Swal.fire({
            title: "Enviando mensaje",
            text: "Gracias, respondere a la brevedad",
            timer: 2000,
          });
          console.log(result.text);
          resetForm();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const resetForm = () => {
    setFormValues({
      user_name: "",
      user_email: "",
      message: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div className="container flex flex-col">
              <h4 className="text-xl uppercase text-green-500 font-medium text-center mb-2 tracking-wide">
                contacto
              </h4>
              <div className="text-center">
                <h2 className="text-[45px] lg:text-[45px] leading-none mb-8">
                  Trabajemos juntos!
                </h2>
                {/* socials */}
                <div className="flex justify-center mb-8">
                  <div className="flex text-[40px] gap-x-6 max-w-max mx-auto lg:mx-0">
                    <Link
                      to="https://api.whatsapp.com/send?phone=+543424767722&text=Hola.%20Vi%20tu%20portfolio."
                      title="whatsapp"
                      target="_blank"
                    >
                      <FaWhatsapp className={styles.social} />
                    </Link>
                    <Link
                      to="mailto:elcorreoquequieres@correo.com?Subject=Portfolio%20"
                      target="_blank"
                      title="g-mail"
                    >
                      <SiGmail title="g-mail" className={styles.social} />
                    </Link>
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

                    <span
                      onClick={share}
                      title="Compartir porfolio"
                      target="_blank"
                    >
                      <BsFillShareFill className={styles.social} />
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-4 mb-1">
                <div className="flex justify-center">
                  <button
                    className="btn btn-lg flex items-center justify-center py-2 px-4"
                    type="submit"
                    value="Send"
                  >
                    <Link
                      to={Cv}
                      download
                      target="_blank"
                      className="flex items-center"
                    >
                      <BsDownload className="mr-2" />
                      <span className="p">Descargar CV</span>
                    </Link>
                  </button>
                </div>

                <div className="flex p-1 md:px-12 max-h-[400px] max-w-[360px] m-auto">
                  <img
                    alt="gallery"
                    className="block w-full rounded-lg object-fit object-center transform transition duration-500 hover:scale-110 cursor-pointer"
                    src={Img1}
                  />
                </div>
                <p className="p text-green-500 text-center mb-2 tracking-wide max-w-[360px] m-auto">
                  Escanea este código con la cámara de WhatsApp para obtener mi
                  numero
                </p>
              </div>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 mt-2 items-start justify-end field"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-green-500 transition-all "
              title="nombre"
              type="text"
              name="user_name"
              placeholder="Ingrese su nombre"
              value={formValues.user_name}
              onChange={handleInputChange}
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-green-500 transition-all "
              title="email"
              type="email"
              name="user_email"
              placeholder="Ingrese su e-mail"
              value={formValues.user_email}
              onChange={handleInputChange}
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-green-500 transition-all resize-none mb-12"
              title="mensaje"
              name="message"
              placeholder="Escriba su mensaje"
              value={formValues.message}
              onChange={handleInputChange}
            ></textarea>
            <button
              className="btn btn-lg"
              type="submit"
              value="Send"
              title="enviar"
            >
              Enviar mensaje
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
