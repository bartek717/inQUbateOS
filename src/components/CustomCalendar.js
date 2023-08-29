import React, { useState } from 'react';
import './Calendar.css'; // Create this CSS file for styling

function CustomCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const startDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  const days = [];
  const totalDays = daysInMonth(currentYear, currentMonth);
  const startDay = startDayOfMonth(currentYear, currentMonth);

  for (let day = 1; day <= totalDays; day++) {
    days.push(day);
  }

  return (
    <div className="calendar-container">
      <div className="calendar">
  
        <div className="days-of-week">
          <div>S</div>
          <div>M</div>
          <div>T</div>
          <div>W</div>
          <div>TH</div>
          <div>F</div>
          <div>S</div>
        </div>
        <div className="calendar-days">
          {Array.from({ length: startDay }, (_, index) => (
            <div key={`empty-${index}`} className="empty-day" />
          ))}
          {days.map((day) => (
            <div
              key={day}
              className={`calendar-day ${day === currentDay ? 'current-day' : ''}`}
              onClick={() => setSelectedDate(new Date(currentYear, currentMonth, day))}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomCalendar;
