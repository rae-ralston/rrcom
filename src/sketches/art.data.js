import sketch220825 from "./220825";
import three221018 from "./221018";

export const types = {
  p5js: "P5_JS",
  threejs: "THREE_JS",
};

const data = [
  {
    id: 1,
    date: "8/25/22",
    toDraw: sketch220825,
    title: "First Try",
    blurb: "Hello world for p5.js",
    type: types.p5js,
  },
  {
    id: 2,
    date: "10/18/22",
    toDraw: three221018,
    title: "Hi There",
    blurb: "Three js hello world",
    type: types.threejs,
  },
  {
    id: 3,
    date: "8/25/22",
    toDraw: sketch220825,
    title: "First Try",
    blurb: "Hello world for p5.js",
    type: types.p5js,
  },
  {
    id: 4,
    date: "10/18/22",
    toDraw: three221018,
    title: "Hi There",
    blurb: "Three js hello world",
    type: types.threejs,
  },
];

export default data;
