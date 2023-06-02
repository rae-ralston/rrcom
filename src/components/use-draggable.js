import { useRef } from "react";

const useDraggable = (offsetX, offsetY) => {
  const elemRef = useRef(null);
  const dragProps = useRef();

  const initializeDrag = (event) => {
    const { clientX, clientY } = event;
    const { left, top } = elemRef.current.getBoundingClientRect();

    dragProps.current = {
      dragStartLeft: left,
      dragStartTop: top,
      dragStartX: clientX,
      dragStartY: clientY,
    };

    window.addEventListener("mousemove", startDragging, false);
    window.addEventListener("mouseup", stopDragging, false);
  };

  const startDragging = ({ clientX, clientY }) => {
    const { current } = dragProps;
    const xDragDelta = current.dragStartX - current.dragStartLeft;
    const xVal = clientX - offsetX - xDragDelta;

    const yDragDelta = current.dragStartY - current.dragStartTop;
    const yVal = clientY - offsetY - yDragDelta;

    elemRef.current.style.transform = `translate(${xVal}px, ${yVal}px)`;
  };

  const stopDragging = () => {
    window.removeEventListener("mousemove", startDragging, false);
    window.removeEventListener("mouseup", stopDragging, false);
  };

  return { initializeDrag, elemRef };
};

export default useDraggable;
