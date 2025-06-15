import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  const words = ['Fullstack Developer', 'React Specialist', 'Prompter', 'Problem Solver', 'Mobile Beginner'];

  // Cache section elements
  useEffect(() => {
    sectionsRef.current = {
      about: document.getElementById('about'),
      projects: document.getElementById('projects')
    };
  }, []); // Empty dependency array karena hanya perlu dijalankan sekali

  // Typing effect
  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText === currentWord) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else {
          setTypedText(currentWord.slice(0, typedText.length + 1));
        }
      } else {
        if (typedText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        } else {
          setTypedText(currentWord.slice(0, typedText.length - 1));
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [typedText, currentWordIndex, isDeleting, words]);

  const scrollToSection = (sectionId: string) => {
    const element = sectionsRef.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fadeInUpVariants: Variants = {
    initial: { y: 60, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const staggerContainerVariants: Variants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1, 
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const floatingAnimation: Variants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const buttonVariants: Variants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { 
      scale: 0.95,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <section id="hero" className={`relative min-h-screen flex items-center justify-center py-20 overflow-hidden ${
      darkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        <motion.div 
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={staggerContainerVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            variants={fadeInUpVariants}
            className={`text-lg sm:text-xl mb-4 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Haaai, World Perkenalkan Saya
            </motion.span>
          </motion.div>
          
          <motion.h1 
            variants={fadeInUpVariants}
            className={`text-5xl sm:text-6xl md:text-7xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Naufal si
            </motion.span>
            <motion.span 
              className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {" "}Developer
            </motion.span>
          </motion.h1>
          
          <motion.div 
            variants={fadeInUpVariants}
            className={`text-2xl sm:text-3xl md:text-4xl mb-8 h-12 flex items-center justify-center ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              I'm a{" "}
            </motion.span>
            <motion.span 
              className="ml-2 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent font-semibold"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              {typedText}
              <motion.span 
                className={`${darkMode ? 'text-white' : 'text-gray-900'}`}
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                |
              </motion.span>
            </motion.span>
          </motion.div>
          
          <motion.p 
            variants={fadeInUpVariants}
            className={`text-lg sm:text-xl max-w-3xl mx-auto mb-12 leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              Passionate di bidangnya, profesional, rapi, inovatif, tetap up-to-date, tidak cepat puas
            </motion.span>
          </motion.p>
          
          <motion.div 
            variants={fadeInUpVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button 
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              View My Work
            </motion.button>
            
            <motion.a
              href="/images/CV Lamaran Naufal Alfan .pdf"
              download="Naufal_CV.pdf"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className={`flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl ${
                darkMode
                  ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              <Download size={20} />
              Download CV
            </motion.a>
          </motion.div>

          <motion.div
            className="flex space-x-4 justify-center mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <motion.a
              href="https://github.com/naufaalfl"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-colors duration-300 ${
                darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={24} className={darkMode ? 'text-white' : 'text-gray-800'} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/bangnoplek/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-colors duration-300 ${
                darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={24} className={darkMode ? 'text-white' : 'text-gray-800'} />
            </motion.a>
            <motion.a
              href="mailto:nalfan1418@gmail.com"
              className={`p-3 rounded-full transition-colors duration-300 ${
                darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={24} className={darkMode ? 'text-white' : 'text-gray-800'} />
            </motion.a>
            {/* Add more social media icons here if needed */}
          </motion.div>

          <motion.div
            variants={floatingAnimation}
            initial="initial"
            animate="animate"
            className="mt-12 flex justify-center w-full"
          >
            <ChevronDown 
              size={32} 
              className={`cursor-pointer ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
              onClick={() => scrollToSection('about')}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;