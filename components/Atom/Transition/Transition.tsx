import React from "react";
import styles from "./Transition.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
const Transition = ({ ...props }) => {
  const router = useRouter();

  return (
    <AnimatePresence>
      <motion.div
        className={styles.transition}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.5 }}
        {...props}
        key={router.asPath}
      ></motion.div>
    </AnimatePresence>
  );
};

export default Transition;
