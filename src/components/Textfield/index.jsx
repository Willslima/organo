import './Textfield.css'

const TextField = props => {
  return (
    <div className='textfield'>
      <label>{props.label}</label>
      <input value={props.value} onChange={props.onChange}
      type="text" placeholder={props.placeholder} required={props.required}/>
    </div>
  )
}

export default TextField
