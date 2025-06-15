import React from "react";
import "../../style/mytask.css"
import "../../style/main.css"
import taskIcon from "../../assets/task-icon.svg"

const MyTask = () => {
    return (
        <div className="mytask">
            <div className="tasklist">
                <div className='other-task'>
                    <div className='task-card'>
                        <div className="piorty-tag">
                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 7.67126C1 9.26256 1.63214 10.7887 2.75736 11.9139C3.88258 13.0391 5.4087 13.6713 7 13.6713C8.5913 13.6713 10.1174 13.0391 11.2426 11.9139C12.3679 10.7887 13 9.26256 13 7.67126C13 6.07997 12.3679 4.55384 11.2426 3.42862C10.1174 2.30341 8.5913 1.67126 7 1.67126C5.4087 1.67126 3.88258 2.30341 2.75736 3.42862C1.63214 4.55384 1 6.07997 1 7.67126Z" stroke="#F21E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className="task-details">
                            <div className="left-d">
                                <h3>Attend Nischal’s Birthday Party</h3>
                                <p className="gray">Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements)</p>

                                <div className="priorty-status">
                                    <p>Prority: <span className="priorty-t" style={{color: 'var(--medium)'}}>medium</span></p>
                                    <p>Status: <span className="priorty-t" style={{color: 'var(--red)'}}>Not Started</span></p>
                                </div>
                            </div>
                            <div className="right-d">
                                <img src={taskIcon} alt="" className="task-image" />
                                <p className="gray">Created on: 20/06/2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="taskdetails">
                <div className="top-detail">
                    <img src={taskIcon} />
                    <div className="status">
                        <h1>Sumitted Dicument</h1>
                        <p>Prior: <span style={{color: "var(--red)"}}>High</span></p>
                        <p>Status: <span style={{color: "var(--red)"}}>Not Stated</span></p>
                        <p className="gray">Created on: 20/06/2023</p>
                    </div>
                </div>

                <p className="detail-task"><span className="bold"></span>: </p>
            </div>
        </div>
    )
}

export default MyTask;