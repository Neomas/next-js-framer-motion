import React from "react";
import styles from "./AppLayout.module.scss";
import { motion } from "framer-motion";
const AppLayout = ({ children }) => {
  return (
    <motion.div
      initial={{ zIndex: 0 }}
      animate={{ zIndex: 1 }}
      exit={{ zIndex: 2 }}
      className={styles.layout}
    >
      {children}
    </motion.div>
  );
};

export default AppLayout;
