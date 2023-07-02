import React from 'react'
import NavBar from './NavBar/NavBar'
import Banner from './Banner/Banner'
import RowPost from './RowPost/RowPost'
import { action, originals, horror, comedy, romance, documentary } from './Urls'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Main = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <RowPost url={action} title='Action' />
      <RowPost url={originals} title='Netflix Orginals' isSmall />
      <RowPost url={horror} title='Horror' isSmall />
      <RowPost url={comedy} title='Comedy' isSmall />
      <RowPost url={romance} title='Romance' isSmall />
      <RowPost url={documentary} title='Documentaries' isSmall />
    </div>
  )
}

export default Main
