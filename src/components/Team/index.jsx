import './Team.css'
import Collaborator from '../Collaborator'

const Team = props => {
  return (
    props.collaborators.length > 0 && <section className="team" style={{ backgroundColor: props.secondaryColor }}>
      <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
      <div className="collaborators">
        {props.collaborators.map(collaborator => 
            <Collaborator 
            key={collaborator.name}
            background={props.primaryColor}
            image={collaborator.image} 
            name={collaborator.name} 
            business={collaborator.business}
            />)}
      </div>
    </section>
  )
}

export default Team
