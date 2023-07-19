import { motion } from "framer-motion";

function ZoomIn({ children }) {
  return (
    <motion.div whileHover={{ scale: 0.98, transition: { duration: 0.2 } }}>
      {children}
    </motion.div>
  );
}

export default ZoomIn;
