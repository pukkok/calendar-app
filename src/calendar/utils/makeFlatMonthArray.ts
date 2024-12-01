/**
 * 
 * @param startWeekIndex 
 * @param totalDays 
 * @returns {Array}
 * @description 
 * 시작하는 요일의 index로 첫번째 시작점을 찾는다.
 * 이전달(시작하기 전)의 값은 false로 자리만 잡아놓는다.
 * 이후는 실제 시작일의 값은 이번달의 길이 만큼 true로 자리를 잡아놓는다.
 * 요일 시작부분의 false 와 true값을 합쳐 달력 배열을 리턴한다.
 */

const makeFlatMonthArray = (startWeekIndex : number, totalDays : number) : Array<Boolean> => {

  return Array(startWeekIndex + totalDays)
  .fill(false) // 요일 시작일 맞추기
  .fill(true, startWeekIndex, startWeekIndex + totalDays) // 나머지를 true로 채우기
}

export default makeFlatMonthArray