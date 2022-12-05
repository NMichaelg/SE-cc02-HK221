import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import "./calendarTable.scss"

function handleDayClick(Dayinfo){
  console.log({Dayinfo});
}

function CalendarTable({ month }) {
  return (
    <div className='calendar-container'>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek'
        }}
        height="100%"
        dateClick={handleDayClick}
      />
    </div>
  )
}

export default CalendarTable
