import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function TodoCalendar({ onDateChange }) {
  return (
    <div>
      <Calendar onChange={onDateChange} />
    </div>
  );
}

export default TodoCalendar;