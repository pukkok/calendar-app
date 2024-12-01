import week from "../../constants/week"
import './styles/CalendarTop.css'

const CalendarTop = () => {

  return (
    <div className="calendar-top">
    {week.ko.map(item => <h4 key={item}>{item}</h4> )}
    </div>
  )
}

export default CalendarTop