import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { technologies } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-pink-500 dark:text-blue-200 text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Vue, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>
      <motion.div variants={fadeIn("", "", 0.1, 1)}>
      <div className='mt-16 flex flex-wrap gap-12'>
        {technologies.map((technology) => (
          <div className='block-container w-20 h-20'>
            <div className='bg-pink-100 dark:bg-tertiary rounded-xl flex justify-center items-center'>
              <img  
                src={technology.icon}
                alt={technology.name}
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        ))}
      </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper (About, "about");