import { complement, isNil } from "ramda";
import { ReactP5Wrapper } from "react-p5-wrapper";
import create from "./create-p5-sketch.js";
import useDimensions from "./use-dims";

const isNotNil = complement(isNil);
const MIN_HEIGHT = 101;

const Card = ({ width, height, toDraw }) => {
  const { ref, dims } = useDimensions();

  if (isNotNil(width) && isNotNil(height)) {
    return <ReactP5Wrapper sketch={create({ width, height, toDraw })} />;
  }

  return (
    <div ref={ref}>
      <ReactP5Wrapper
        sketch={create({
          height: dims.height || MIN_HEIGHT,
          width: dims.width,
          toDraw,
        })}
      />
    </div>
  );
};

export default Card;
