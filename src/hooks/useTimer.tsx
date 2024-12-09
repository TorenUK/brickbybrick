import { useState, useEffect } from "react";

const useTimer = (targetDate: Date) => {
  const calculateMinutesLeft = () => {
    const now = new Date();
    const difference = Math.floor(
      (targetDate.getTime() - now.getTime()) / (1000 * 60) // Difference in minutes
    );

    return difference > 0 ? difference : 0; // Return 0 if the target date is passed
  };

  const [minutesLeft, setMinutesLeft] = useState(calculateMinutesLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setMinutesLeft(calculateMinutesLeft());
    }, 1000); // Still updates every second for precision

    return () => clearInterval(timer); // Clean up interval on unmount
  }, [targetDate]);

  return minutesLeft; // Return only minutes
};

export { useTimer };
