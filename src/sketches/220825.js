const draw = (p) => () => {
  p.mouseIsPressed ? p.fill(0) : p.fill(255);
  p.ellipse(p.mouseX, p.mouseY, 80, 80);
};

export default draw;
