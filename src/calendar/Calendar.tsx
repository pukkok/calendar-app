import FlexiDate from "./lib/FlexiDate"

const Calendar = () => {

  const today = new FlexiDate(2024, 12, 2)
  console.log(today.format('YYYY-MM-DD hh:mm'))
  console.log(today.weekDay())

  return (
    <>달력 만들기</>
  )

}

export default Calendar