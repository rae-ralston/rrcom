const sketch = (p) => {
  let rotation = 0;

  p.setup = () => void p.createCanvas(500, 500);

  p.draw = () => {
    p.mouseIsPressed ? p.fill(0) : p.fill(255);
    p.ellipse(p.mouseX, p.mouseY, 80, 80);
  };
};

export default sketch;
