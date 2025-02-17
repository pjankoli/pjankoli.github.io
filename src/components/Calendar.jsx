// src/components/Calendar.jsx
import React, { useState } from 'react';
import holidays from '../data/holidays';
import HolidayDay from './HolidayDay';
import HolidayModal from './HolidayModal';

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedHoliday, setSelectedHoliday] = useState(null);

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay(); // 0 = Sunday, 1 = Monday, ...

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const days = daysInMonth(year, month);
    const firstDay = firstDayOfMonth(year, month);

  const calendarDays = [];

    // Add empty days for padding at the beginning of the month
    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="day empty"></div>);
    }

  // Create day elements for the month
  for (let day = 1; day <= days; day++) {
    const date = new Date(year, month, day);
    const dateString = date.toISOString().split('T')[0]; // YYYY-MM-DD
    const holiday = holidays.find(h => h.date === dateString);

    calendarDays.push(
      <HolidayDay
        key={dateString}
        date={date}
        holiday={holiday}
        onClick={setSelectedHoliday}
      />
    );
  }

    const handlePreviousMonth = () => {
        setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
    };

  return (
    <div className="calendar">
        <div className="calendar-header">
            <button onClick={handlePreviousMonth}>&lt; Previous</button>
            <h2>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
            <button onClick={handleNextMonth}>Next &gt;</button>
        </div>

      <div className="calendar-grid">
          <div className="day-name">Sun</div>
          <div className="day-name">Mon</div>
          <div className="day-name">Tue</div>
          <div className="day-name">Wed</div>
          <div className="day-name">Thu</div>
          <div className="day-name">Fri</div>
          <div className="day-name">Sat</div>
        {calendarDays}
      </div>
      <HolidayModal holiday={selectedHoliday} onClose={() => setSelectedHoliday(null)} />
    </div>
  );
}

export default Calendar;