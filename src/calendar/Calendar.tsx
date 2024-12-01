import { useState } from "react"
import FlexiDate from "./lib/FlexiDate"
import makeFlatMonthArray from "./utils/makeFlatMonthArray"

const Calendar = () => {

  const today = new FlexiDate(2024, 11, 1)

  const [currentDate, setCurrentDate] = useState(today)
  const startWeekIndex = currentDate.startWeekIndex
  const totalDays = currentDate.totalMonthInDays
  
  console.log(totalDays)
  console.log(startWeekIndex)
  
  const flatArr = makeFlatMonthArray(startWeekIndex, totalDays)

  console.log(flatArr)



  return (
    <>달력 만들기</>
  )

}

export default Calendar