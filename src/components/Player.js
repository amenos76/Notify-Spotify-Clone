import React from 'react'
import Body from './Body'
import Sidebar from './Sidebar'
import Footer from './Footer'
import './Player.css'

export default function Player() {
  return (
    <div className="player">
      <div className="player-body">
        <Sidebar />
        <Body />
      </div>

      <Footer />
    </div>
  )
}
