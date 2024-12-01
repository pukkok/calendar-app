/**
 * 
 * @param {boolean[]} flattenArray 
 * @returns {number[][]}
 * @description 
 * 1차원 월 배열을 받는다.
 * 주를 기준으로 2차원 배열로 변환하여 반환한다.
 */
const makeArrayDevidedByWeek = (flattenArray : boolean[]) : number[][] => {
  let monthArr : number[][] = []
  let weekArr : number[] = []
  let falseCount = flattenArray.filter(item => !item).length

  flattenArray.forEach((item, idx) => {
    let pushNum = 0

    item ? pushNum = idx - falseCount + 1 : pushNum = 0 // 이번달이라면 날짜 입력, 아니라면 0 입력
    weekArr.push(pushNum)

    if ((idx + 1) % 7 === 0) { // 7일 기준으로 나눈다.
      monthArr.push(weekArr) // week이 가득차면 month로 채운다.
      weekArr = [] // 초기화
    } else if (idx === flattenArray.length - 1) { // 마지막 종료 시점
      const blankCount = 7 - ((idx % 7) + 1) // 채워지지 못한 부분의 개수
      const nextMonth = Array(blankCount).fill(0) // 다음달 부분은 0으로 채운다.
      monthArr.push([...weekArr, ...nextMonth]) // 마지막 주를 month에 채운다.
    }
    
  })

  return monthArr
}

export default makeArrayDevidedByWeek