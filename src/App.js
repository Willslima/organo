import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Form from './components/Form'
import Team from './components/Team'
import Footer from './components/Footer'

function App() {
  const teams = [{
    name:'Programmation',
    primaryColor:'#57C278',
    secondaryColor:'#D9F7E9'
  },{
    name:'Front-end',
    primaryColor:'#82CFFA',
    secondaryColor:'#E8F8FF'
  },{
    name:'Data Science',
    primaryColor:'#A6D157',
    secondaryColor:'#F0F8E2'
  },{
    name:'Devops',
    primaryColor:'#E06B69',
    secondaryColor:'#FDE7E8'
  },{
    name:'UX and Design',
    primaryColor:'#DB6EBF',
    secondaryColor:'#FAE9F5'
  },{
    name:'Mobile',
    primaryColor:'#FFBA05',
    secondaryColor:'#FFF5D9'
  },{
    name:'Management and Innovation',
    primaryColor:'#FF8A29',
    secondaryColor:'#FFEEDF'
  }]

  const [team, setTeam] = useState([])

  const forNewCollaborator = (collaborator) => {
    setTeam([...team, collaborator])
    // console.log(team)
  }

  return (
    <div className="App">
      <Banner />
      <Form team={teams.map(team => team.name )} onChange={collaborator => forNewCollaborator(collaborator)}/>
      {
      teams.map(tm => <Team 
        key={tm.name}
         name={tm.name} 
         primaryColor={tm.primaryColor} 
         secondaryColor={tm.secondaryColor}
         collaborators={team.filter(te => te.dropdown === tm.name)}
         />
      )}
      <Footer />
    </div>
  )
}

export default App
