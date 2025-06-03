import React from "react"
import "../../style/sidebar.css"
import icon from "../../assets/sidebar"

const SideBar = () => {
    return (
        <div class="sidebar">
            <img src={icon.user} className="userimage"/>
            <div className="sidebar-wrapper">
                <div>
                    <h4 className="user-name">Sundar Gurung</h4>
                    <h4 className="user-email">sundargurung360@gmail.com</h4>

                    <ul className="sidebar-lists">
                        <li className="sidebar-item">
                            <a className="active" href="/">
                                <img src={icon.dashboard} />
                                <p>Dashboad</p>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="" href="/">
                                <img src={icon.vitaltask} />
                                <p>Vital task</p>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="" href="/">
                                <img src={icon.mytask} />
                                <p>My Task</p>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="" href="/">
                                <img src={icon.cat} />
                                <p>Task categories</p>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="" href="/">
                                <img src={icon.setting} />
                                <p>Settings</p>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="" href="/">
                                <img src={icon.help} />
                                <p>Help</p>
                            </a>
                        </li>
                    </ul>
                </div>

                
                <a className="logout" href="/">
                    <img src={icon.logout} />
                    <p>logout</p>
                </a>
                
            </div>
        </div>
    )
}

export default SideBar;
