import React from 'react';

function formatDate(timestamp) {
  const date = new Date(timestamp);
  const month = date.toLocaleString('default', { month: 'short' });
  const day = date.getDate();
  const suffix = day === 1 ? 'st' : day === 2 ? 'nd' : day === 3 ? 'rd' : 'th';
  return `${month} ${day}${suffix}`;
}

function Deadlines({ deadlines }) {
  // Sort the deadlines array by timestamp in ascending order
  const sortedDeadlines = deadlines.sort((a, b) => a.timestamp - b.timestamp);

  return (
    <div>
      <h1>Deadlines</h1>
      {sortedDeadlines.map((deadline) => (
        <div key={deadline.id}>
          {formatDate(deadline.timestamp)} - {deadline.Name.toLowerCase()}
        </div>
      ))}
    </div>
  );
}

export default Deadlines;
