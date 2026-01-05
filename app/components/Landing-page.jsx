"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Rocket, ShieldCheck, Lightbulb } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const Landingpage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ["-8deg", "8deg"]);

  useEffect(() => {
    setIsVisible(true);
  }, []);


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden font-sans">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/coding.jpg"
          alt="background"
          fill
          priority
          className="w-full h-full object-cover"
          quality={90}
        />
        {/* Gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/40 via-blue-950/35 to-cyan-950/40" />

      </div>

      {/* ============================
           ARROW ANIMATIONS
      ============================ */}

      {/* Left to Right Arrows */}
      <div className="absolute inset-0 z-[5] pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`lr-${i}`}
            className="absolute"
            style={{
              top: `${10 + i * 15}%`,
              left: "-50px",
            }}
            animate={{
              x: ["-100px", "calc(100vw + 100px)"],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          >
            <div className="flex items-center gap-2">
              <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-500 to-transparent" />
              <svg
                className="w-6 h-6 text-cyan-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5 12H19M19 12L13 6M19 12L13 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Right to Left Arrows */}
      <div className="absolute inset-0 z-[5] pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`rl-${i}`}
            className="absolute"
            style={{
              top: `${15 + i * 14}%`,
              right: "-50px",
            }}
            animate={{
              x: ["calc(100vw + 100px)", "-100px"],
            }}
            transition={{
              duration: 18 + Math.random() * 12,
              repeat: Infinity,
              delay: Math.random() * 7,
              ease: "linear",
            }}
          >
            <div className="flex items-center gap-2 flex-row-reverse">
              <div className="w-16 h-0.5 bg-gradient-to-l from-blue-500 to-transparent" />
              <svg
                className="w-6 h-6 text-blue-400 rotate-180"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5 12H19M19 12L13 6M19 12L13 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Top to Bottom Arrows */}
      <div className="absolute inset-0 z-[5] pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`tb-${i}`}
            className="absolute"
            style={{
              left: `${20 + i * 20}%`,
              top: "-50px",
            }}
            animate={{
              y: ["-100px", "calc(100vh + 100px)"],
            }}
            transition={{
              duration: 25 + Math.random() * 15,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "linear",
            }}
          >
            <div className="flex flex-col items-center gap-2">
              <div className="w-0.5 h-16 bg-gradient-to-b from-purple-500 to-transparent" />
              <svg
                className="w-6 h-6 text-purple-400 rotate-90"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 5V19M12 19L18 13M12 19L6 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom to Top Arrows */}
      <div className="absolute inset-0 z-[5] pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`bt-${i}`}
            className="absolute"
            style={{
              left: `${25 + i * 18}%`,
              bottom: "-50px",
            }}
            animate={{
              y: ["calc(100vh + 100px)", "-100px"],
            }}
            transition={{
              duration: 22 + Math.random() * 12,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear",
            }}
          >
            <div className="flex flex-col items-center gap-2 flex-col-reverse">
              <div className="w-0.5 h-16 bg-gradient-to-t from-teal-500 to-transparent" />
              <svg
                className="w-6 h-6 text-teal-400 -rotate-90"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 5V19M12 19L18 13M12 19L6 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Diagonal Arrows (Top Left to Bottom Right) */}
      <div className="absolute inset-0 z-[5] pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`diag1-${i}`}
            className="absolute"
            style={{
              top: "-50px",
              left: "-50px",
            }}
            animate={{
              x: ["-100px", "calc(100vw + 100px)"],
              y: ["-100px", "calc(100vh + 100px)"],
            }}
            transition={{
              duration: 30 + Math.random() * 20,
              repeat: Infinity,
              delay: Math.random() * 15,
              ease: "linear",
            }}
          >
            <svg
              className="w-8 h-8 text-cyan-500/40"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M7 7L17 17M17 7V17H7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Diagonal Arrows (Top Right to Bottom Left) */}
      <div className="absolute inset-0 z-[5] pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`diag2-${i}`}
            className="absolute"
            style={{
              top: "-50px",
              right: "-50px",
            }}
            animate={{
              x: ["calc(100vw + 100px)", "-100px"],
              y: ["-100px", "calc(100vh + 100px)"],
            }}
            transition={{
              duration: 28 + Math.random() * 18,
              repeat: Infinity,
              delay: Math.random() * 12,
              ease: "linear",
            }}
          >
            <svg
              className="w-8 h-8 text-blue-500/40 rotate-90"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M7 7L17 17M17 7V17H7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Interactive Arrows that follow cursor */}
      <div className="absolute inset-0 z-[6] pointer-events-none">
        <motion.div
          className="absolute w-8 h-8"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            x: useTransform(smoothX, [-0.5, 0.5], ["-100px", "100px"]),
            y: useTransform(smoothY, [-0.5, 0.5], ["-100px", "100px"]),
            left: "50%",
            top: "50%",
          }}
        >
          <svg
            className="w-full h-full text-cyan-400"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2V22M12 2L16 6M12 2L8 6M12 22L8 18M12 22L16 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>

      {/* Floating Squares Background Pattern */}
      <div className="absolute inset-0 z-[1] overflow-hidden">
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-cyan-500/10"
            style={{
              width: `${Math.random() * 40 + 20}px`,
              height: `${Math.random() * 40 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              rotate: `${Math.random() * 45}deg`,
            }}
            animate={{
              y: [0, Math.random() * 50 - 25],
              x: [0, Math.random() * 50 - 25],
              rotate: [0, 90, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Pulse Rings */}
      <div className="absolute inset-0 flex items-center justify-center z-[1]">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute border border-cyan-500/10 rounded-full"
            style={{
              width: `${300 + i * 200}px`,
              height: `${300 + i * 200}px`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Interactive Glass Panel with Corner Squares */}
        <motion.div
          className="relative bg-gradient-to-br from-slate-900/40 to-slate-800/20 backdrop-blur-xl rounded-3xl border border-slate-700/30 shadow-2xl overflow-hidden"
          style={{
            rotateX,
            rotateY,
            transformPerspective: 1000,
            transformStyle: "preserve-3d",
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
        >
          {/* Animated Border Effect */}
          <motion.div
            className="absolute inset-0 rounded-3xl"
            animate={{
              boxShadow: [
                "inset 0 0 20px rgba(6, 182, 212, 0.1)",
                "inset 0 0 40px rgba(6, 182, 212, 0.2)",
                "inset 0 0 20px rgba(6, 182, 212, 0.1)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* CORNER SQUARES - Enhanced Version */}

          {/* Top Left Square - Animated */}
          <motion.div
            className="absolute top-6 left-6 w-12 h-12 z-20"
            initial={{ opacity: 0, scale: 0 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="absolute inset-0 border-2 border-cyan-400/60" />
            <div className="absolute inset-2 border border-cyan-300/40" />
            <motion.div
              className="absolute w-3 h-3 bg-cyan-400"
              animate={{
                x: [0, 27, 27, 0, 0],
                y: [0, 0, 27, 27, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-cyan-400" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400" />
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-cyan-400" />
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-cyan-400" />
          </motion.div>

          {/* Top Right Square - Animated */}
          <motion.div
            className="absolute top-6 right-6 w-12 h-12 z-20"
            initial={{ opacity: 0, scale: 0 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="absolute inset-0 border-2 border-cyan-400/60" />
            <div className="absolute inset-2 border border-cyan-300/40" />
            <motion.div
              className="absolute w-3 h-3 bg-cyan-400"
              animate={{
                x: [27, 0, 0, 27, 27],
                y: [0, 0, 27, 27, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
                delay: 0.5,
              }}
            />
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-cyan-400" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400" />
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-cyan-400" />
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-cyan-400" />
          </motion.div>

          {/* Bottom Left Square - Animated */}
          <motion.div
            className="absolute bottom-6 left-6 w-12 h-12 z-20"
            initial={{ opacity: 0, scale: 0 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <div className="absolute inset-0 border-2 border-cyan-400/60" />
            <div className="absolute inset-2 border border-cyan-300/40" />
            <motion.div
              className="absolute w-3 h-3 bg-cyan-400"
              animate={{
                x: [0, 0, 27, 27, 0],
                y: [27, 0, 0, 27, 27],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
                delay: 1,
              }}
            />
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-cyan-400" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400" />
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-cyan-400" />
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-cyan-400" />
          </motion.div>

          {/* Bottom Right Square - Animated */}
          <motion.div
            className="absolute bottom-6 right-6 w-12 h-12 z-20"
            initial={{ opacity: 0, scale: 0 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="absolute inset-0 border-2 border-cyan-400/60" />
            <div className="absolute inset-2 border border-cyan-300/40" />
            <motion.div
              className="absolute w-3 h-3 bg-cyan-400"
              animate={{
                x: [27, 27, 0, 0, 27],
                y: [27, 0, 0, 27, 27],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
                delay: 1.5,
              }}
            />
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-cyan-400" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400" />
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-cyan-400" />
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-cyan-400" />
          </motion.div>

          {/* Content */}
          <div className="relative z-20 p-6 sm:p-8 md:p-12 lg:p-16">
            {/* Header Section */}
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <motion.div variants={itemVariants} className="mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-900/30 backdrop-blur-sm border border-cyan-700/30 mb-6">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-cyan-300 text-sm font-medium">
                    COMING SOON
                  </span>
                </div>
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 tracking-tight"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
              >
                {"Digital Sahay".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={letterVariants}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.03,
                    }}
                    className="inline-block hover:text-cyan-300 transition-colors duration-300 relative group"
                    whileHover={{
                      scale: 1.1,
                      y: -2,
                      textShadow: "0 0 20px rgba(6, 182, 212, 0.8)",
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                    <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
                  </motion.span>
                ))}
              </motion.h1>

              <motion.div variants={itemVariants}>
                <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent max-w-2xl mx-auto" />
              </motion.div>
            </div>

            {/* Tagline */}
            <motion.div variants={itemVariants} className="mb-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl text-center text-cyan-100 font-light leading-relaxed max-w-3xl mx-auto">
                Transforming digital landscapes with{" "}
                <span className="text-cyan-300 font-semibold">
                  innovative solutions
                </span>{" "}
                and{" "}
                <span className="text-cyan-300 font-semibold">
                  cutting-edge technology
                </span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants} className="mb-12">
              <p className="text-base sm:text-lg text-slate-300 text-center leading-relaxed max-w-2xl mx-auto">
                We're building a comprehensive digital ecosystem that empowers
                businesses to thrive in the modern digital era. Our platform
                combines advanced technology with intuitive design to deliver
                exceptional results.
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            >
              {[
                {
                  title: "Digital Innovation",
                  description: "Pioneering solutions for tomorrow's challenges",
                  icon: Rocket,
                  color:
                    "border-cyan-500/30 hover:border-cyan-500 text-cyan-400",
                },
                {
                  title: "Compliance Excellence",
                  description: "Navigating regulations with precision",
                  icon: ShieldCheck,
                  color:
                    "border-blue-500/30 hover:border-blue-500 text-blue-400",
                },
                {
                  title: "Smart Solutions",
                  description: "Intelligent systems for modern businesses",
                  icon: Lightbulb,
                  color:
                    "border-purple-500/30 hover:border-purple-500 text-purple-400",
                },
              ].map((feature, i) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={i}
                    className="relative group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                    whileHover={{ y: -5 }}
                  >
                    <div
                      className={`bg-slate-900/30 backdrop-blur-sm border ${feature.color} rounded-xl p-6 transition-all duration-300 group-hover:bg-slate-800/40`}
                    >
                      {/* ICON */}
                      <div className="mb-4 flex items-center justify-center">
                        <Icon className="w-8 h-8" />
                      </div>

                      {/* TITLE */}
                      <h3 className="text-xl font-bold text-white mb-3">
                        {feature.title}
                      </h3>

                      {/* DESCRIPTION */}
                      <p className="text-slate-400 text-sm">
                        {feature.description}
                      </p>

                      {/* HOVER LINE */}
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA Section */}
            <motion.div variants={itemVariants} className="mb-12">
              <div className="text-center">
                <motion.div
                  className="inline-block"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button className="group relative bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-lg sm:text-xl px-8 sm:px-12 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    <span className="relative z-10">
                      Get Notified at Launch
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </button>
                </motion.div>
              </div>
            </motion.div>

            {/* Status Indicators */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-slate-400"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>System: Active</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-slate-600" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-500" />
                <span>Launch: Q1 2026</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-slate-600" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500" />
                <span>Beta Access: Available</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Landingpage;
