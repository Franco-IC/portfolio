import { motion } from "framer-motion";

function FadeIn({ children, once = true, duration = 0.5 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ duration: duration }}
      viewport={{ once: once }}
      variants={{
        visible: { opacity: 1, translateY: "-65px" },
        hidden: { opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;
