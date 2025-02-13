import { motion } from "framer-motion";
import React, { Suspense } from "react";

import { styles } from "../styles";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import DeveloperModel from "./canvas/DeveloperModel";
import CanvasLoader from "./Loader";

const Hero = () => {
  return (
    <section className="relative w-full 
    h-screen mx-auto">
      <div className={`${styles.paddingX} absolute 
      inset-0 top-[120px] mas-w-7xl mx-auto flex 
      flex-row items-start gap-5`}>
        <div className="flex flex-col 
        justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-pink-600 dark:bg-[#7C4BE7]" />
          <div className="w-1 sm:h-80 h-40 
          violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}
           text-pink-300 dark:text-blue-200`}>Hi, I'm &nbsp;
           <span className="text-pink-600 dark:text-[#7C4BE7]">Noa</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2
           text-pink-900 dark:text-blue-100`}>
            I develop software, user <br className="sm:block hidden" /> 
            interfaces and web applications.
          </p>
        </div>
      </div>
      <Canvas>
        <ambientLight intensity={2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={<CanvasLoader />}>
          <DeveloperModel position={[0, -4.5, 0]} rotation={[0.5, 0, 0]} scale={3} />
        </Suspense>
      </Canvas>

      <div className="absolute xs:bottom-10 
      bottom-32 w-full flex justify-center
      items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] 
          rounded-3xl border-4 border-pink-600 dark:border-blue-200
          flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full
              bg-pink-600 dark:bg-blue-200 mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero