import HeadLine from "./header/HeadLine"
import NavigateButton from "./header/NavigateButton"


const Header = () => {

  const navigateMonth = () => {
    console.log('동작 테스트')
  }

  return <header>
    <NavigateButton
    handleClick = {navigateMonth}
    >◀️</NavigateButton>
    <HeadLine/>
    <NavigateButton
    handleClick = {navigateMonth}
    >▶️</NavigateButton>
  </header>
}

export default Header