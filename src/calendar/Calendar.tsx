import EnhancedDate from "./lib/EnhancedDate"

const Calendar = () => {

  const today = new EnhancedDate()
  console.log(today.date)
  const day = new Date(24, 11, 1)

  return (
    <>달력 만들기</>
  )

}

export default Calendar