import { useLayoutEffect, useRef, useState } from "react";

const useDimensions = () => {
  const ref = useRef();
  const [dims, setDims] = useState({});

  useLayoutEffect(() => {
    if (ref.current) {
      setDims(ref.current.getBoundingClientRect().toJSON());
    }
  }, [ref]);

  return { ref, dims };
};

export default useDimensions;
