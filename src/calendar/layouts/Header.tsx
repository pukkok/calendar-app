import React from "react"
import HeadLine from "./header/HeadLine"
import NavigateButton from "./header/NavigateButton"
import './header/styles/Header.css'
import FlexiDate from "../lib/FlexiDate"

interface headerProps {
  handleNavigateMonth : React.Dispatch<React.SetStateAction<FlexiDate>>
  headline : string
}

const Header = ({handleNavigateMonth, headline} : headerProps) => {

  const navigateMonth = (e : React.MouseEvent<HTMLButtonElement>) => {
    const direction = Number(e.currentTarget.dataset.direction)

    handleNavigateMonth(prev => {
      let result = null
      const {year, month, date} = prev
      result = new FlexiDate(year, month+direction, date)
      return result
    })
  }

  return <header>
    <NavigateButton
    data-direction = {-1}
    handleClick = {navigateMonth}
    >◀️</NavigateButton>
    <HeadLine>{headline}</HeadLine>
    <NavigateButton
    data-direction = {1}
    handleClick = {navigateMonth}
    >▶️</NavigateButton>
  </header>
}

export default Header