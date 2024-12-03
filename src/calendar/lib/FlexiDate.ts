import week from "../constants/week"
import makeArrayDevidedByWeek from "../utils/makeArrayDevidedByWeek"
import makeFlatMonthArray from "../utils/makeFlatMonthArray"
import EnhancedDate from "./EnhancedDate"

class FlexiDate extends EnhancedDate {

  format (formatString : string) : string {
    const year = String(this.year)
    const month = String(this.month).padStart(2, "0")
    const date = String(this.date).padStart(2, "0")
    const hours = String(this.hours).padStart(2, "0")
    const minutes = String(this.minutes).padStart(2, "0")
    return formatString
    .replace('YYYY', year)
    .replace('MM', month)
    .replace('DD', date)
    .replace('hh', hours)
    .replace('mm', minutes)
  }

  // 요일을 리턴한다. default는 한국어다.
  weekDay (locale : "ko" | "en" = "ko" ) : string {
    return week[locale][this.day]
  }

  private get startWeekIndex () : number { // 시작하는 요일의 index
    return new EnhancedDate(this.year, this.month, 1).day
  }

  private get totalMonthInDays () : number { // 총 한달간의 일수
    return new EnhancedDate(this.year, this.month+1, 0).date
  }

  extractThisMonthArray () { // 이번 달의 이차원 배열을 추출하는 함수
    const flattenArray = makeFlatMonthArray(this.startWeekIndex, this.totalMonthInDays)
    const result = makeArrayDevidedByWeek(flattenArray)
    return result
  }

  // 이번 주의 배열을 추출하는 함수 만들기
}

export default FlexiDate