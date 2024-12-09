import { useState, useEffect } from "react";

const useTimer = (targetDate: Date) => {
  const calculateSecondsLeft = () => {
    const now = new Date();
    const difference = Math.floor(
      (targetDate.getTime() - now.getTime()) / 1000
    ); // Difference in seconds

    return difference > 0 ? difference : 0; // Return 0 if the target date is passed
  };

  const [secondsLeft, setSecondsLeft] = useState(calculateSecondsLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft(calculateSecondsLeft());
    }, 1000);

    return () => clearInterval(timer); // Clean up interval on unmount
  }, [targetDate]);

  return secondsLeft; // Return only seconds
};

export { useTimer };
