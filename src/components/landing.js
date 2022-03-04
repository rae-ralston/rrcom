import { motion } from "framer-motion";
import { Container } from "./styles/_landing";
import splash from "../images/work-in-progress.svg";
import lightbulb from "../images/lightbulb-polished.svg";

const wave = { rotate: [0, 25, 0, 25, 0, 25, 0] };

export const Landing = () => (
  <Container>
    <div>
      <img src={splash} alt="Rae Ralston, Software Engineer" />
      <img
        src={lightbulb}
        className="lightbulb scaling-lightbulb"
        alt="Hiring Rae Ralston Software Engineer is a great idea"
      />
    </div>

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
        I'm a senior creative engineer with a background in ux design and visual
        art.
      </p>
    </motion.div>
  </Container>
);
