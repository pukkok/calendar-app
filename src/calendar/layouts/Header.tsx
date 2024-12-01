import HeadLine from "./header/HeadLine"
import NavigateButton from "./header/NavigateButton"
import './header/styles/Header.css'

const Header = ({headline} : any) => {

  const navigateMonth = (e : any) => {
    console.log('동작 테스트')
    console.log(e.currentTarget.dataset.direction)
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