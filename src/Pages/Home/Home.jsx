// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'

// eslint-disable-next-line react/prop-types
const Home = ({sidebar}) => {
  return (
    <>
    <Sidebar sidebar={sidebar} />
    <div className={`container ${sidebar?"":'large-container'}`}>
        <Feed/>
    </div>
    </>
  )
}

export default Home
