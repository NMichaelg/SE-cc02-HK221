import { useState, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { Navigate, useLocation, useNavigate} from 'react-router-dom'
import "./calendarTable.scss"


function CalendarTable() {
  const curPath = useLocation();
  const [path, setPath] = useState(curPath);
  const navigate = useNavigate();

  const handleDayClick = function (date) {
    var dateID = date.dateStr.replaceAll("-", "")
    // console.log({curPath})
    var newPath = curPath.pathname.concat("/day/", dateID)
    // console.log("Data from calendar", newPath);
    setPath(newPath);
  }

  useEffect(function(){
    console.log('use effect')
    console.log(path)
    navigate(path,{replace:true});
  },[path])
  
  console.log('render')

  // console.log("hello");
  return (
    <div className='calendar-container'>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth'
        }}
        height="100%"
        dateClick={handleDayClick}
      />
    </div>
  )
}

export default CalendarTable