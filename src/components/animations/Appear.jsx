import { motion } from "framer-motion";

function Appear({ children, once = true, duration = 0.8 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ duration: duration }}
      viewport={{ once: once }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}

export default Appear;
