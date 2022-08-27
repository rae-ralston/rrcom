import { complement, isNil } from "ramda";
import { ReactP5Wrapper } from "react-p5-wrapper";
import create from "./create-p5-sketch.js";
import useDimensions from "./use-dims";
import ArtContainer from "./styles/card";

const isNotNil = complement(isNil);
const MIN_HEIGHT = 101;

const Card = (props) => {
  const {
    width: incomingHeight,
    height: incomingWidth,
    toDraw,
    title,
    blurb,
  } = props;
  const { ref, dims } = useDimensions();

  const width = isNotNil(incomingWidth) ? incomingWidth : dims.width;
  const height = isNotNil(incomingHeight)
    ? incomingHeight
    : dims.height || MIN_HEIGHT;

  return (
    <div>
      {title && <h2>{title}</h2>}
      {blurb && <p>{blurb}</p>}
      <ArtContainer ref={ref}>
        <ReactP5Wrapper sketch={create({ height, width, toDraw })} />
      </ArtContainer>
    </div>
  );
};

export default Card;
