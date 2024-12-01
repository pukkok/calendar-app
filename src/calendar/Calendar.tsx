import { useState } from "react"
import FlexiDate from "./lib/FlexiDate"
import makeFlatMonthArray from "./utils/makeFlatMonthArray"
import makeArrayDevidedByWeek from "./utils/makeArrayDevidedByWeek"
import Main from "./layouts/Main"
import Header from "./layouts/Header"
import Footer from "./layouts/Footer"

const Calendar = () => {

  const today = new FlexiDate(2024, 11, 1)

  const [currentDate, setCurrentDate] = useState(today)
  const startWeekIndex = currentDate.startWeekIndex
  const totalDays = currentDate.totalMonthInDays
  
  const flattenArr = makeFlatMonthArray(startWeekIndex, totalDays)
  const monthArray = makeArrayDevidedByWeek(flattenArr)

  return (
    <section>
      <Header/>
      <Main monthArray={monthArray}/>  
      <Footer/>
    </section>
  )

}

export default Calendar