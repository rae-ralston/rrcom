import { useState } from "react";
import musicIcon from "./icon.music.svg";
import resumeIcon from "./icon.resume.svg";
import contactIcon from "./icon.contact.svg";

const Types = {
  RESUME: "RESUME",
  MUSIC: "MUSIC",
  CONTACT: "CONTACT",
};

const useSections = () => {
  const defaultOrder = [Types.RESUME, Types.MUSIC, Types.CONTACT];
  const [order, setOrder] = useState(defaultOrder);

  const [hideResume, setHideResume] = useState(false);
  const [hideMusic, setHideMusic] = useState(false);
  const [hideContact, setHideContact] = useState(false);

  const toggleResume = () => setHideResume(!hideResume);
  const toggleMusic = () => setHideMusic(!hideMusic);
  const toggleContact = () => setHideContact(!hideContact);

  const bringToFront =
    (element, cb = () => {}) =>
    () => {
      const index = order.indexOf(element);
      let copy = [...order];

      if (index !== -1) {
        copy.splice(index, 1);
        copy.unshift(element);
      }

      setOrder(copy);
      cb();
    };

  return {
    bringToFront,
    resume: {
      icon: resumeIcon,
      index: order.indexOf(Types.RESUME),
      toggle: bringToFront(Types.RESUME, toggleResume),
      hide: hideResume,
    },
    music: {
      icon: musicIcon,
      index: order.indexOf(Types.MUSIC),
      toggle: bringToFront(Types.MUSIC, toggleMusic),
      hide: hideMusic,
    },
    contact: {
      icon: contactIcon,
      index: order.indexOf(Types.CONTACT),
      toggle: bringToFront(Types.CONTACT, toggleContact),
      hide: hideContact,
    },
  };
};
export default useSections;
