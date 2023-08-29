import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

function DaysUntil({ deadlines }) {
  const [timeUntilNextDeadline, setTimeUntilNextDeadline] = useState(null);
  const [closestDeadline, setClosestDeadline] = useState(null);
  useEffect(() => {
    if (deadlines.length > 0) {
      const now = new Date().getTime();
      const closestDeadline = deadlines.reduce((closest, current) => {
        return current.timestamp < closest.timestamp && current.timestamp > now ? current : closest;
      });
      setClosestDeadline(closestDeadline);

      const updateCountdown = () => {
        const timeRemaining = Math.max(0, closestDeadline.timestamp - new Date().getTime());

        const totalHoursRemaining = timeRemaining / (1000 * 60 * 60);
        const days = Math.floor(totalHoursRemaining / 24);
        const fractionalDays = totalHoursRemaining / 24;

        setTimeUntilNextDeadline({ days, fractionalDays }); 
      };
      updateCountdown(); 
      const intervalId = setInterval(updateCountdown, 100);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [deadlines]);

  return (
    <div>
      {timeUntilNextDeadline !== null && (
        <div className='mainNum'>
          <h1 className='ach'>
            {timeUntilNextDeadline.days.toFixed(0)}.
            {timeUntilNextDeadline.fractionalDays !== undefined
              ? timeUntilNextDeadline.fractionalDays.toFixed(7).split('.')[1]
              : '0000000'}
          </h1>
          <p>
            Days until {closestDeadline.Name.toLowerCase()}{' '}
          </p>
        </div>
      )}
    </div>
  );
}

export default DaysUntil;
