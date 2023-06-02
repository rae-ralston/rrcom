import { useEffect, useState } from "react";

const useTimeDateDisplay = () => {
  const today = new Date();
  today.setFullYear(today.getFullYear() + 30);
  const [timeDate, setTimeDate] = useState(new Date());

  const tick = () => void setTimeDate(new Date());

  useEffect(() => {
    const timerID = setInterval(tick, 1000);
    return () => void clearInterval(timerID);
  }, []);

  return {
    time: timeDate.toLocaleTimeString(),
    date: timeDate.toDateString(),
  };
};
export default useTimeDateDisplay;
