import React from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner'
import RowPost from './components/RowPost'
import {trending,action} from './urls'

function App() {
  


  return (
    <div className='App'>
     <NavBar/>
     <Banner/>
     <RowPost url={trending} title='Trending'/>
     <RowPost url={action} title='Action' isSmall/>
     <RowPost url={action} title='Action' isSmall/>
     {/* <RowPost url={tv} title='Tv' isSmall/> */}

    </div>
  )
}

export default App

