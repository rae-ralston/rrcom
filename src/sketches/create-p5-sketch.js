import { isNil } from "ramda";

const sketch = (componentProps) => (p5) => {
  const { width, height, toDraw } = componentProps;

  if (isNil(width) || isNil(height) || isNil(toDraw)) return;

  p5.setup = () => void p5.createCanvas(width, height);
  p5.draw = toDraw(p5);
};

export default sketch;
