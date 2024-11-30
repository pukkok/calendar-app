class EnhancedDate {
  private _date: Date // 월은 0부터 시작

  constructor(
    year?: number, 
    month?: number, 
    day?: number,
    hours? : number,
    minutes? : number
  ) {
    if(!year) this._date = new Date()
    else if(!month) this._date = new Date(year)
    else if(!day) this._date = new Date(year, month-1) 
    else if(!hours) this._date = new Date(year, month-1, day)
    else if(!minutes) this._date = new Date(year, month-1, day, hours)
    else this._date = new Date(year, month - 1, day, hours, minutes) 
  }

  get all () : object {
    return this._date
  }

  get date () : number {
    return this._date.getDate()
  }

  get minutes () : number {
    return this._date.getMinutes()
  }
  get hours () : number {
    return this._date.getHours()
  }
  
  get day () : number {
    return this._date.getDay()
  }
  get month () : number {
    return this._date.getMonth() + 1
  }
  get year () : number {
    return this._date.getFullYear()
  }
}

export default EnhancedDate