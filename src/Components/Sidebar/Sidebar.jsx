// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import Fortnite from '../../assets/Fortnite.jpg'
import MrBeast from '../../assets/MrBeast.jpg'
import PewDiePie from '../../assets/PewDiePie.jpg'
import Minecraft from '../../assets/Minecraft.jpg'
import TomandJarry from '../../assets/Tom and Jarry.jpg'

// eslint-disable-next-line react/prop-types
const Sidebar = ({sidebar}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
        <div className="shortcut-links">
            <div className="side-link">
                <img src={home} alt="" /><p>Home</p>
            </div>
            <div className="side-link">
                <img src={game_icon} alt="" /><p>Gaming</p>
            </div>
            <div className="side-link">
                <img src={automobiles} alt="" /><p>Automobiles</p>
            </div>
            <div className="side-link">
                <img src={sports} alt="" /><p>Sports</p>
            </div>
            <div className="side-link">
                <img src={entertainment} alt="" /><p>Entertainment</p>
            </div>
            <div className="side-link">
                <img src={tech} alt="" /><p>Technology</p>
            </div>
            <div className="side-link">
                <img src={music} alt="" /><p>Music</p>
            </div>
            <div className="side-link">
                <img src={blogs} alt="" /><p>Blogs</p>
            </div>
            <div className="side-link">
                <img src={news} alt="" /><p>News</p>
            </div>
            <hr />
        </div>
        <div className="subscribed-list">
            <h3>Subscribed</h3>
            <div className="side-link">
                <img src={Fortnite} alt="" /><p>Fortnite</p>
            </div>
            <div className="side-link">
                <img src={MrBeast} alt="" /><p>MrBeast</p>
            </div>
            <div className="side-link">
                <img src={PewDiePie} alt="" /><p>PewDiePaw</p>
            </div>
            <div className="side-link">
                <img src={Minecraft} alt="" /><p>Minecraft</p>
            </div>
            <div className="side-link">
                <img src={TomandJarry} alt="" /><p>Tom and Jarry</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
