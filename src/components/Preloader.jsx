import { motion } from "framer-motion";

export default function Preloader() {
  const slideUp = {
    initial: {
      y: 0,
    },
    exit: {
      y: "-100vh",
      transition: { duration: 1, ease: [0.83, 0, 0.17, 1] },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="h-screen w-screen z-[999] fixed top-0 left-0 bg-white flex justify-center items-center"
    >
      <motion.p
        className="font-bold tracking-tight"
        transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        ContemptStudios
      </motion.p>
    </motion.div>
  );
}
