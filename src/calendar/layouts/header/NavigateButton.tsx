import './styles/NavigateButton.css'

const NavigateButton = ({children, handleClick, ...props} : any) => {

  return <button className='navigate-button' onClick={handleClick} {...props} >{children}</button>
}

export default NavigateButton