import { IconContext } from "react-icons";
import { FaDribbbleSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

export const SocialLinks = () => {
  const iconConfig = {
    color: "#3B81E1",
    size: "20px",
    style: {
      verticalAlign: "middle",
      alignSelf: "center",
      margin: "0 auto",
    },
  };

  return (
    <IconContext.Provider value={iconConfig}>
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
  );
};
