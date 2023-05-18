import './Collaborator.css'

const Collaborator = (props) => {
  return (
    <div className='collaborator'>
      <div className='header' style={{backgroundColor: props.background}}>
        <img src={!undefined || !null ? props.image: 'https://github.com/Willslima.png'} alt="profile" />
      </div>
      <div className='footer'>
        <h4>{!undefined || !null ? props.name: 'Name'}</h4>
        <h3>{!undefined || !null ? props.business: 'Business'}</h3>
      </div>
    </div>
  )
}

export default Collaborator
