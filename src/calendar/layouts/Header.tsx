import HeadLine from "./header/HeadLine"
import NavigateButton from "./header/NavigateButton"
import './header/styles/Header.css'

const Header = ({headline} : any) => {

  const navigateMonth = () => {
    console.log('동작 테스트')
  }

  return <header>
    <NavigateButton
    handleClick = {navigateMonth}
    >◀️</NavigateButton>
    <HeadLine>{headline}</HeadLine>
    <NavigateButton
    handleClick = {navigateMonth}
    >▶️</NavigateButton>
  </header>
}

export default Header