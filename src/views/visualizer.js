import elevatorMusic from "../assets/visualizer.elevator-music-loop.mp3";

const Visualizer = () => (
  <div style={{ color: "white" }}>
    <audio controls={true} src={elevatorMusic} />
  </div>
);

export default Visualizer;
