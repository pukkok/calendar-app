import { useState } from "react"
import FlexiDate from "./lib/FlexiDate"
import makeFlatMonthArray from "./utils/makeFlatMonthArray"
import makeArrayDevidedByWeek from "./utils/makeArrayDevidedByWeek"
import Main from "./layouts/Main"
import Header from "./layouts/Header"
import Footer from "./layouts/Footer"

const Calendar = () => {

  const today = new FlexiDate()

  const [currentDate, setCurrentDate] = useState<FlexiDate>(today)
  
  const currentDateFormat = currentDate.format('YYYY년 MM월') 
  const monthArray = currentDate.extractThisMonthArray()

  return (
    <section>
      <Header 
      handleNavigateMonth={setCurrentDate} 
      headline={currentDateFormat}/>
      <Main monthArray={monthArray}/>
      <Footer/>
    </section>
  )

}

export default Calendar