import './Form.css'
import TextField from '../Textfield'
import Dropdown from '../Dropdown'
import Button from '../Button'
import { useState } from 'react'
const Form = (props) => {
  
  const [name, setName] = useState('')
  const [business, setBusiness] = useState('')
  const [image, setImage] = useState('')
  const [dropdown, setDropdown] = useState('Programmation')
  
  function Save(event){
    event.preventDefault()
    props.onChange({
      name,
      business,
      image,
      dropdown
    })
    setName('')
    setBusiness('')
    setImage('')
    setDropdown('Programmation')
  }
  return (
    <section className="form">
      <form onSubmit={Save}>
        <h2>Type the data from yours users</h2>
        <TextField 
        label="Name" placeholder="Type your name" 
        required={true}
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <TextField 
        label="Business" placeholder="Type your business" 
        required={true}
        value={business}
        onChange={(e) => setBusiness(e.target.value)}
        />
        <TextField label="Image" placeholder="Type src from your image" 
        value={image}
        onChange={(e) => setImage(e.target.value)}/>
        <Dropdown label='Team' options={props.team} 
        required={true}
        value={dropdown}
        onChange={(e) => setDropdown(e.target.value)}
        />
        <Button>
          Create card
        </Button>
      </form>

    </section>
  )
}

export default Form
