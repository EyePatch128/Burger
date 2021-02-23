import React, {useEffect} from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion"


function ShowWhenVisible(props) {
    const controls = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
  
    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: props.delay || 0.5, when: "beforeChildren"}}
        variants={{
          visible: { opacity: 1, y: 0},
          hidden: { opacity: 0, y: 30 }
        }}
      >
        {props.children}
      </motion.div>
    );
  }

export default ShowWhenVisible;