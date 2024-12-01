import CalendarTop from "./main/CalendarTop"
import WeekBox from "./main/WeekBox"
import './main/styles/Main.css'

interface mainProps {
  monthArray: number[][]
}

const Main = ({ monthArray } : mainProps) => {

  return (
    <main>
      <CalendarTop/>
      <WeekBox monthArray={monthArray}/>
    </main>
  )
}

export default Main