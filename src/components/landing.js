import { motion } from "framer-motion";
import { Container } from "./styles/_landing.js";
import splash from "../images/work-in-progress.svg";

export const Landing = () => {
  const wave = { rotate: [0, 25, 0, 25, 0, 25, 0] };

  return (
    <Container>
      <img src={splash} alt="Rae Ralston, Software Engineer" />

      <motion.div
        animate={{ x: [100, 0] }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        <div className="headline-wrapper">
          <motion.h1
            className="big-boy"
            animate={wave}
            transition={{ ease: "easeInOut", duration: 2 }}
            whileHover={wave}
          >
            👋
          </motion.h1>{" "}
          <h1 className="big-boy">Hi, I'm Rae.</h1>
        </div>

        <p>
          I'm a senior creative engineer with a background in ux design and
          visual art.
        </p>
      </motion.div>
    </Container>
  );
};
