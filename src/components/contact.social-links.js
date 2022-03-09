import { IconContext } from "react-icons";
import { FaDribbbleSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { iconConfig } from "./constants";

export const SocialLinks = () => (
  <div>
    <IconContext.Provider value={iconConfig()}>
      <a href="https://github.com/rachel-ftw">
        <FaGithubSquare />
      </a>
      <a href="https://dribbble.com/raeralston">
        <FaDribbbleSquare />
      </a>
      <a href="https://www.linkedin.com/in/raeralston/">
        <FaLinkedin />
      </a>
    </IconContext.Provider>
  </div>
);
