import './Button.css'

type buttonType = {
    variant : string
    borderRadius : number
}

const Button = ({variant = 'primary', borderRadius}: buttonType) => {
  return (
    <button 
    className={`${variant}`}
    style={{
        borderRadius
    }}
    >
        Button
    </button>
  )
}

export default Button