
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import ErrorFetch from './components/ErrorFetch'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'

function App() {


// 
const [locationInput, setlocationInput] = useState()  
 const [location, setLocation] = useState()
 const [hasError, setHasError] = useState(false)



useEffect(() => {
  // Locations 1 to 126
  let URL
  if(locationInput){
    URL = `https://rickandmortyapi.com/api/location/${locationInput}`
  } else {
    const ramdonIdLocation = Math.floor( Math.random() * 126) +1
    URL = `https://rickandmortyapi.com/api/location/${ramdonIdLocation}`

  }

  axios.get(URL) // promise
  .then(res => {
    setHasError(false)
    setLocation(res.data)
  })
  .catch(err => {
    setHasError(true)
    console.log(err)
  })
},[locationInput])


const handleSumit = e =>{
  e.preventDefault()
  setlocationInput(e.target.inputSearch.value)
}

  return (
    <div className="App">
     <div className='banner__container'> 
      <img className='banner' src= "img/tiny paints.gif" alt="" />
     </div>
     {/* <h1>Rick and Morty Wiki</h1> */}
     <div className='img__container'>
     <img className='img__title' src="./public/title.svg" alt="" />
     </div>
     <div>
      <form className='form__container' onSubmit={handleSumit}>
        <input id='inputSearch' type="text" />
        <button>Search</button>
      </form>
      </div>

      {
        hasError ?
        <ErrorFetch />
        :
        <>
        
        <LocationInfo  location ={location}/>
      <div className='residents__container'>
      {
        location?.residents.map(url => (
          <ResidentCard key={url} url={url}/>
        ))
      }

      </div>
      </>
      }
    
    </div>
  )
}

export default App
 