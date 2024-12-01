import './styles/NavigateButton.css'

const NavigateButton = ({children, handleClick} : any) => {

  return <button className='navigate-button' onClick={handleClick}>{children}</button>
}

export default NavigateButton