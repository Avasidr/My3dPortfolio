import { useState, useRef, Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ContactModel from "./canvas/ContactModel";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import CanvasLoader from "./Loader";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import Swal from 'sweetalert2';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
});

const [loading, setLoading] = useState(false);

const handleChange = (e) => {
  const { name, value } = (e.target);

  setForm({ ...form, [name]: value })
}

const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true);

  emailjs.send(
    'service_clo7jwm', 
    'template_wl9mcj8',
    {
      from_name: form.name,
      to_name: 'Noa', 
      from_email: form.email, 
      to_email: 'noafr94@gmail.com',
      message: form.message,
    },
    '0p1t2xX24kbSk6ldu'
  )
  .then(() => {
    setLoading(false);
    
    Swal.fire({
      title: "Thank you. I will get back to you as soon as possible.",
      icon: "success",
      draggable: true
    });

    setForm({
      name: '',
      email: '',
      message: '',
    })
  }, (error) => {
    setLoading(false)

    console.log(error);

    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    });
  })
}

  return (
    <div className="xl:mt-12 xl:flex-row 
    flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-pink-100 dark:bg-tertiary p-8
        rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-pink-600 dark:text-blue-300 font-medium
            mb-4">Your Name</span>
            <input 
              type="text" 
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-pink-200 dark:bg-blue-200 py-4 px-6
              placeholder:text-pink-300 dark:placeholder:text-blue-300
              text-pink-950 dark:text-blue-500
              rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-pink-600 dark:text-blue-300 font-medium
            mb-4">Your Email</span>
            <input 
              type="email" 
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-pink-200 dark:bg-blue-200 py-4 px-6
              placeholder:text-pink-300 dark:placeholder:text-blue-300 text-pink-950
              dark:text-blue-500 rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-pink-600 dark:text-blue-300 font-medium
            mb-4">Your Message</span>
            <textarea 
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-pink-200 dark:bg-blue-200 py-4 px-6
              placeholder:text-pink-300 dark:placeholder:text-blue-300
               text-pink-950 dark:text-blue-500 rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-pink-600 dark:bg-[#7C4BE7] py-3 px-8 
            outline-none w-fit text-pink-100 dark:text-blue-100 font-bold shadow-md
            shadow-primary rounded-xl"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <Canvas>
        <ambientLight intensity={2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={<CanvasLoader />}>
          <ContactModel position-y={-2} rotation={[0.5, 0, 0]} scale={2.2} />
        </Suspense>
      </Canvas>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")