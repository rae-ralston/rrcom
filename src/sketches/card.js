import { complement, isNil } from "ramda";
import { ReactP5Wrapper } from "react-p5-wrapper";
import create from "./create-p5-sketch.js";
import useDimensions from "./use-dims";
import ArtContainer from "./styles/card";

const isNotNil = complement(isNil);
const MIN_HEIGHT = 101;

const Card = (props) => {
  const { width, height, toDraw, title, blurb } = props;
  const { ref, dims } = useDimensions();
  const containerRef = isNotNil(width) && isNotNil(height) ? {} : { ref };

  return (
    <div>
      {title && <h2>{title}</h2>}
      {blurb && <p>{blurb}</p>}
      <ArtContainer {...containerRef}>
        <ReactP5Wrapper
          sketch={create({
            height: dims.height || MIN_HEIGHT,
            width: dims.width,
            toDraw,
          })}
        />
      </ArtContainer>
    </div>
  );
};

export default Card;
