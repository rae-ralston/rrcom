import elevatorMusic from "./visualizer.elevator-music-loop.mp3";

const Visualizer = () => {
  return (
    <div style={{ color: "white" }}>
      <audio controls={true} src={elevatorMusic} />
    </div>
  );
};
export default Visualizer;
