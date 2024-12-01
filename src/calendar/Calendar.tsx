import { useState } from "react"
import FlexiDate from "./lib/FlexiDate"

const Calendar = () => {

  const today = new FlexiDate(2024, 11, 1)

  const [currentDate, setCurrentDate] = useState(today)
  const startWeekIndex = currentDate.startWeekIndex
  const totalDays = currentDate.totalMonthInDays
  
  console.log(totalDays)
  console.log(startWeekIndex)
  
  const flatArr = Array(startWeekIndex + totalDays)
  .fill(false) // 요일 시작일 맞추기
  .fill(true, startWeekIndex, startWeekIndex + totalDays) // 나머지 1로 채우기

  console.log(flatArr)

  return (
    <>달력 만들기</>
  )

}

export default Calendar