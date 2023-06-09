import { motion } from "framer-motion";

function ZoomIn({ children }) {
  return (
    <motion.div whileHover={{ scale: 0.96, transition: { duration: 0.3 } }}>
      {children}
    </motion.div>
  );
}

export default ZoomIn;
