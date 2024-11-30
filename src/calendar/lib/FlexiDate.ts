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
}

export default FlexiDate