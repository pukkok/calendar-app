const NavigateButton = ({children, handleClick} : any) => {

  return <button onClick={handleClick}>{children}</button>
}

export default NavigateButton