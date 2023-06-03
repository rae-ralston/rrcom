import styled from "@emotion/styled";
import { complement, isNil, path } from "ramda";
import { ReactP5Wrapper } from "react-p5-wrapper";
import create from "./create-p5-sketch.js";
import useDimensions from "./use-dims";
import { types } from "../views/art.data.js";
import Canvas from "./221018";
const isNotNil = complement(isNil);
const MIN_HEIGHT = 101;

const ArtContainer = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid grey;
`;

const Card = (props) => {
  const {
    width: incomingHeight,
    height: incomingWidth,
    toDraw,
    title,
    blurb,
    type,
    id,
  } = props;

  const { ref, dims } = useDimensions();

  const width = isNotNil(incomingWidth) ? incomingWidth : dims.width;
  const height = isNotNil(incomingHeight)
    ? incomingHeight
    : dims.height || MIN_HEIGHT;

  const display =
    type === path("p5js", types) ? (
      <ReactP5Wrapper sketch={create({ height, width, toDraw })} />
    ) : (
      <Canvas id={`three-${id}`} width={width} height={height} />
    );

  return (
    <div>
      {title && <h2>{title}</h2>}
      {blurb && <p>{blurb}</p>}
      <ArtContainer ref={ref}>{display}</ArtContainer>
    </div>
  );
};

export default Card;
