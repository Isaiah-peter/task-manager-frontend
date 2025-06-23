import React, {useState} from "react"
import Modal from "../Modal";
import ImageUploader from './imageUploader';

import "../../style/main.css"
import "../../style/addtask.css"

const AddTask = () => {
    const [showModal, setShowModal] = useState(false);
    
    return (
        <Modal show={showModal} header="Add New Task" onClose={() => setShowModal(false)}>
            <div className="addTask-container">
                <form action="" className="addtask-wrapper">
                    <div className="addtask-input-wrapper">
                        <label htmlFor="" className="addtask-label">Title</label>
                        <input type="text" className="addtask-input" />
                    </div>
                    <div className="addtask-input-wrapper">
                        <label htmlFor="" className="addtask-label">Date</label>
                        <input type="date" className="addtask-input" />
                    </div>
                    <div className="priority-container">
                        <div className="priority-input">
                            <label className="task-status-text">
                                <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="3.5" cy="3.5" r="3.5" fill="#05A301"/>
                                </svg>
                                <p>High</p>
                            </label>
                            <input type="checkbox" name="" id="" /> 
                        </div>
                        <div className="priority-input">
                            <label className="task-status-text">
                                <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="3.5" cy="3.5" r="3.5" fill="#05A301"/>
                                </svg>
                                <p>High</p>
                            </label>
                            <input type="checkbox" name="" id="" /> 
                        </div>
                        <div className="priority-input">
                            <label className="task-status-text">
                                <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="3.5" cy="3.5" r="3.5" fill="#05A301"/>
                                </svg>
                                <p>High</p>
                            </label>
                            <input type="checkbox" name="" id="" /> 
                        </div>
                    </div>
                    <div className="task-discription">
                        <div className="addtask-input-wrapper">
                            <label htmlFor="" className="addtask-label"></label>
                            <textarea type="text" className="addtask-input" />
                        </div>
                        <div className="upload-image">
                            <ImageUploader />
                        </div>
                    </div>
                </form>
            </div>
        </Modal>
    )
}

export default AddTask
