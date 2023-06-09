import { motion } from "framer-motion";

function SlideIn({ children, once = true }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, x: 60 },
        hidden: { opacity: 0 },
      }}
      viewport={{ once: once }}
    >
      {children}
    </motion.div>
  );
}

export default SlideIn;
