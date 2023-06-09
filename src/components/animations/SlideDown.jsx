import { motion } from "framer-motion";

function SlideDown({ children, once = true }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: 60 },
        hidden: { opacity: 0 },
      }}
      viewport={{ once: once }}
    >
      {children}
    </motion.div>
  );
}

export default SlideDown;
