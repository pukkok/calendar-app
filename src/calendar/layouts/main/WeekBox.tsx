import DataBox from "./DataBox"
import WeekTop from "./WeekTop"

interface mainProps {
  monthArray: number[][]
}

const WeekBox = ({ monthArray } : mainProps) => {

  return (
  <>
    {monthArray.map((weekArray, weekIdx) => {
      return <div className="week-box" key={weekIdx}>
        {weekArray.map((date, dateIdx) => {
          return (
            <div key={dateIdx}>
              <WeekTop>{date}</WeekTop>
              <DataBox>
                <p>데이터 {dateIdx}</p>
              </DataBox>
            </div>
          )
        })}
      </div>
    })}
  </>
  )
}

export default WeekBox