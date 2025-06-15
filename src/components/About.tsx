import React, { useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/projects';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const categoryLabels = {
  language: 'Bahasa Pemrograman',
  framework: 'Framework',
  design: 'UI/UX Design',
  tools: 'Tools & Version Control',
  database: 'Database',
  soft_skills: 'Soft Skills',
  cloud: 'Cloud Services'
};

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const [containerRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px'
  });
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const skillCardVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const maxScroll = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;
      
      if (direction === 'left') {
        scrollContainerRef.current.scrollTo({
          left: Math.max(0, currentScroll - scrollAmount),
          behavior: 'smooth'
        });
      } else {
        scrollContainerRef.current.scrollTo({
          left: Math.min(maxScroll, currentScroll + scrollAmount),
          behavior: 'smooth'
        });
      }
    }
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section ref={containerRef} id="about" className={`py-20 ${
      darkMode ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            About <motion.span 
              className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Me
            </motion.span>
          </h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div 
            className="space-y-6"
            variants={itemVariants}
          >
            <motion.h3 
              className={`text-2xl font-semibold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
              variants={itemVariants}
            >
              Hai World! It's Me
            </motion.h3>
            <motion.p 
              className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
              variants={itemVariants}
            >
              Saya adalah siswa SMK Wikrama Bogor dengan jurusan Pengembangan Perangkat Lunak dan Gim (PPLG). Sudah terjun dan mendalami bidang ini selama 2 tahun dan akan terus berkembang. Saya mempunyai semangat belajar yang tinggi dan tidak pernah menyerah dalam menghadapi tantangan. Setiap kesempatan kecil akan saya manfaatkan sebaik mungkin untuk mencapai tujuan besar saya!
            </motion.p>
            <motion.p 
              className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
              variants={itemVariants}
            >
              Saya berkomitmen untuk menghasilkan kode yang bersih, rapi, dan efisien. Selalu tepat waktu dalam menyelesaikan tugas dan proyek. Saya terus mengikuti perkembangan teknologi terbaru dan memanfaatkan AI sebagai alat bantu, bukan ketergantungan. Inovasi dan kreativitas adalah kunci dalam setiap proyek yang saya kerjakan!
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-3"
              variants={itemVariants}
            >
              {['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Docker'].map((tech, index) => (
                <motion.span 
                  key={tech}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    darkMode 
                      ? 'bg-gray-700 text-gray-300' 
                      : 'bg-white text-gray-700 shadow-md'
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className={`relative p-8 rounded-2xl ${
              darkMode ? 'bg-gray-900' : 'bg-white'
            } shadow-xl`}
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <motion.div 
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="relative">
              <motion.h4 
                className={`text-xl font-semibold mb-6 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
                variants={itemVariants}
              >
                Quick Facts
              </motion.h4>
              <motion.div 
                className="space-y-4"
                variants={containerVariants}
              >
                {[
                  { label: 'Pengalaman', value: '2 Tahun' },
                  { label: 'Proyek Selesai', value: '20+' },
                  { label: 'Teknologi Dikuasai', value: '9+' },
                  { label: 'Kopi Diminum', value: 'infinity' }
                ].map(({ label, value }, index) => (
                  <motion.div 
                    key={label} 
                    className="flex justify-between items-center"
                    variants={itemVariants}
                    custom={index}
                  >
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                      {label}
                    </span>
                    <motion.span 
                      className={`font-semibold ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {value}
                    </motion.span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills & Technologies Section */}
        <motion.h2 
          className="text-3xl font-bold text-center mt-16 mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Skills & Teknologi
        </motion.h2>
        
        <div className="relative">
          <motion.div
            ref={scrollContainerRef}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-row flex-nowrap gap-8 overflow-x-auto pb-4 scroll-smooth"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              scrollBehavior: 'smooth'
            }}
          >
            {Object.entries(groupedSkills).map(([category, categorySkills], index) => (
              <motion.div
                key={category}
                variants={skillCardVariants}
                custom={index}
                whileHover="hover"
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex-none min-w-[280px]"
              >
                <motion.h3 
                  className="text-xl font-semibold mb-4 text-gray-900 dark:text-white"
                  variants={itemVariants}
                >
                  {categoryLabels[category as keyof typeof categoryLabels]}
                </motion.h3>
                <div className="flex flex-row flex-nowrap gap-4 overflow-x-auto pb-4"
                  style={{ 
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                  }}>
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={skillCardVariants}
                      custom={skillIndex}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-none flex flex-col items-center justify-center p-3 bg-blue-600 rounded-lg text-white font-semibold shadow-md"
                      style={{ minWidth: '120px' }}
                    >
                      <motion.span 
                        className="text-3xl mb-2"
                        animate={{ 
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1.1, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      >
                        {skill.icon}
                      </motion.span>
                      <span className="text-base">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <motion.button
            onClick={() => scroll('left')}
            className={`absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow-lg opacity-70 hover:opacity-100 transition-opacity duration-300 ${darkMode ? 'text-white' : 'text-gray-800'}`}
            aria-label="Scroll left"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={24} />
          </motion.button>
          <motion.button
            onClick={() => scroll('right')}
            className={`absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow-lg opacity-70 hover:opacity-100 transition-opacity duration-300 ${darkMode ? 'text-white' : 'text-gray-800'}`}
            aria-label="Scroll right"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default About;