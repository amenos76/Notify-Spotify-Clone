import React from 'react'
import Body from './Body'
import Sidebar from './Sidebar'
import Footer from './Footer'
import './Player.css'

export default function Player( {spotify} ) {
  return (
    <div className="player">
      <div className="player-body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>

      <Footer spotify={spotify} />
    </div>
  )
}
