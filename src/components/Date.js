import React from 'react';

function CurrentDate() {
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  const currentYear = currentDate.getFullYear();

  return (
    <div>
      <p>{currentMonth} {currentYear}</p>
      <p></p>
    </div>
  );
}

export default CurrentDate;