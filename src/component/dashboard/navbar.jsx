import React from "react"
import '../../style/navbar.css'
import dIcon from "../../assets/dashboard"

const Navbar = () => {
    return (
        <div className="navbar">
            <div>
                <h1 className="app-icon"><span className="colored">To</span>-Do</h1>
            </div>
            <div className="search-container">
                <input type="text" className="search-bar" placeholder="Search your task here..."/>
                <button className="search-icon"><img src={dIcon.search}/></button>
            </div>
            <div className="date-container">
                <div className="btn-con">
                    <button className="notification-icon"><img src={dIcon.noti}/></button>
                    <button className="db-icon"><img src={dIcon.db}/></button>
                </div>

                <div className="date-wrapper">
                    <p className="day">Tuesday</p>
                    <p className="date">{Date.UTC(Date.now())}</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar