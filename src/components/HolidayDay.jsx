// src/components/HolidayDay.jsx
import React from 'react';

function HolidayDay({ date, holiday, onClick }) {
  const isHoliday = holiday !== undefined && holiday !== null;
  const dayOfMonth = date.getDate();

    return (
      <div
        className={`day ${isHoliday ? 'holiday' : ''}`}
        onClick={() => isHoliday && onClick(holiday)} // Only call onClick if it's a holiday
        style={{ cursor: isHoliday ? 'pointer' : 'default' }} // Change cursor on hover if holiday
      >
        <span className="day-number">{dayOfMonth}</span>
        {isHoliday && (
          <div className="holiday-name">
            {holiday.name.en} {/* Display English name; you can adapt for language preference */}
          </div>
        )}
      </div>
    );
}

export default HolidayDay;