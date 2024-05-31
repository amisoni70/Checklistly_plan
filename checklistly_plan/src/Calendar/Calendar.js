import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calender.css';

function TodoCalendar({ onDateChange }) {
  return (
    <div className='TodoCalendar-container'>
      <Calendar className="react-calendar" onChange={onDateChange} />
    </div>
  );
}

export default TodoCalendar;