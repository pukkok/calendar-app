import FlexiDate from "./lib/FlexiDate"

const Calendar = () => {

  const today = new FlexiDate()
  console.log(today.format('YYYY-MM-DD hh:mm'))

  return (
    <>달력 만들기</>
  )

}

export default Calendar