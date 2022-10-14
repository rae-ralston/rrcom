import { isNil } from "ramda";
import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";

export const types = {
  github: "github",
  linkedIn: "linkedIn",
  email: "email",
};

export const footerIcons = [
  {
    type: types.github,
    href: "http://www.github.com/rachel-ftw",
  },
  {
    type: types.linkedIn,
    href: "https://www.linkedin.com/in/raeralston",
  },
];

const Icon = ({ type, href }) => {
  const getIconByType = () => {
    if (type === types.github) return FaGithub;
    if (type === types.linkedIn) return FaLinkedin;
    if (type === types.email) return FaRegEnvelope;

    return null;
  };

  const Icon = getIconByType();

  if (isNil(Icon)) return null;

  return (
    <a href={href} target="_blank" rel="noreferrer">
      <Icon className="icon" style={{ margin: "3px", fontSize: "30px" }} />
    </a>
  );
};

export default Icon;
