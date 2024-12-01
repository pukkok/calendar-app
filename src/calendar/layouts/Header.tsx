import React from "react"
import HeadLine from "./header/HeadLine"
import NavigateButton from "./header/NavigateButton"
import './header/styles/Header.css'

interface headerProps {
  handleNavigateMonth : React.Dispatch<React.SetStateAction<number>>
  headline : string
}

const Header = ({handleNavigateMonth, headline} : headerProps) => {

  const navigateMonth = (e : React.MouseEvent<HTMLButtonElement>) => {
    const direction = Number(e.currentTarget.dataset.direction)
    handleNavigateMonth(prev => prev+direction)
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