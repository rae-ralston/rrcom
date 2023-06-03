import { useState } from "react";
import musicIcon from "./icon.music.svg";
import resumeIcon from "./icon.resume.svg";

const useSections = () => {
  const [hideResume, setHideResume] = useState(false);
  const [hideMusic, setHideMusic] = useState(false);

  const toggleResume = () => setHideResume(!hideResume);
  const toggleMusic = () => setHideMusic(!hideMusic);

  return {
    resume: {
      icon: resumeIcon,
      toggle: toggleResume,
      hide: hideResume,
    },
    music: {
      icon: musicIcon,
      toggle: toggleMusic,
      hide: hideMusic,
    },
  };
};
export default useSections;
