import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './component/profileCard'

function App() {  
  const name="Abdirahman"
  const name2="sadaque Alli"
  const age=22
  const age2= 23
  //const profilePicture=url()
  const bio="am  Abdirahman Alli an engineer at Riyadh am a graduate at Makkah "
  const bio2="graduate from university of Madina in Computer Siystem Enginering.Currently working at Masjid Nabawi as a sinior Engineer"

  return (
    <>
  <Profile name={name} age={age} bio={bio} />
  <Profile name={name2} age={age2} bio={bio2} />
    </>
  )
}

export default App
