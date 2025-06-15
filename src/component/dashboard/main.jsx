import React from 'react'
import "../../style/main.css"
import handwave from "../../assets/handwave.svg"
import friend from "../../assets/friend.svg"
import pending from "../../assets/pending.svg"
import CircularProgressBar from './CircularProgressBar';
import taskIcon from "../../assets/task-icon.svg"

const Home = () => {
    const shortMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const date = new Date()

    const day = date.getDate()
    const month = shortMonths[date.getMonth()]
    return(
        <div className="home-container">
            <div className="home-wrapper">
                <div className="home-top">
                    <h1>
                        Welcome back, Sundar  
                        <img src={handwave} />
                    </h1>
                    <div className="friend-container">
                        <div className="user-friend">
                            <img src={friend}/>
                            <img src={friend}/>
                            <img src={friend}/>
                            <img src={friend}/>
                            <img src={friend}/>
                        </div>
                        <button className="add-friend-btn">
                        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.351 10.1276V11.7398H5.67752V10.1276C5.67752 10.1276 5.67752 6.90308 10.5143 6.90308C15.351 6.90308 15.351 10.1276 15.351 10.1276ZM12.9326 2.87247C12.9326 2.39416 12.7908 1.9266 12.5251 1.5289C12.2593 1.1312 11.8816 0.82123 11.4397 0.63819C10.9978 0.455149 10.5116 0.407258 10.0425 0.500571C9.57334 0.593884 9.14243 0.824211 8.80421 1.16243C8.466 1.50064 8.23567 1.93155 8.14236 2.40067C8.04905 2.86979 8.09694 3.35604 8.27998 3.79794C8.46302 4.23984 8.77299 4.61753 9.17069 4.88327C9.56838 5.149 10.036 5.29084 10.5143 5.29084C11.1556 5.29084 11.7708 5.03605 12.2243 4.58251C12.6778 4.12898 12.9326 3.51386 12.9326 2.87247ZM15.5122 6.95145C15.9529 7.35798 16.3081 7.84821 16.5573 8.39353C16.8064 8.93885 16.9444 9.52833 16.9632 10.1276V11.7398H19.3816V10.1276C19.3816 10.1276 19.3816 7.34645 15.5122 6.95145ZM14.5449 0.454102C14.3013 0.454248 14.0593 0.492323 13.8274 0.56696C14.299 1.24327 14.5519 2.04795 14.5519 2.87247C14.5519 3.69699 14.299 4.50167 13.8274 5.17798C14.0593 5.25262 14.3013 5.29069 14.5449 5.29084C15.1863 5.29084 15.8014 5.03605 16.2549 4.58251C16.7084 4.12898 16.9632 3.51386 16.9632 2.87247C16.9632 2.23108 16.7084 1.61596 16.2549 1.16243C15.8014 0.708894 15.1863 0.454102 14.5449 0.454102ZM6.48365 4.48471H4.06528V2.06635H2.45304V4.48471H0.034668V6.09696H2.45304V8.51533H4.06528V6.09696H6.48365V4.48471Z" fill="#FF6767"/>
                        </svg>

                            invite
                        </button>
                    </div>
                </div>

                <div className="home-task-container">
                    <div className="shadow home-task">
                        <div className="top-hometask">
                            <div className='small-logo'>
                                <img src={pending} />
                                <p>To-do</p>
                            </div>

                            <a className="addTaskbtn" href="/">
                                <svg width="96" height="19" viewBox="0 0 96 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M29.4148 12H28.3068L31.5114 3.27273H32.6023L35.8068 12H34.6989L32.0909 4.65341H32.0227L29.4148 12ZM29.8239 8.59091H34.2898V9.52841H29.8239V8.59091ZM39.5014 12.1364C38.956 12.1364 38.4744 11.9986 38.0568 11.723C37.6392 11.4446 37.3125 11.0526 37.0767 10.5469C36.8409 10.0384 36.723 9.4375 36.723 8.74432C36.723 8.05682 36.8409 7.46023 37.0767 6.95455C37.3125 6.44886 37.6406 6.05824 38.0611 5.78267C38.4815 5.5071 38.9673 5.36932 39.5185 5.36932C39.9446 5.36932 40.2813 5.44034 40.5284 5.58239C40.7784 5.72159 40.9688 5.88068 41.0994 6.05966C41.233 6.2358 41.3366 6.38068 41.4105 6.49432H41.4957V3.27273H42.5014V12H41.5298V10.9943H41.4105C41.3366 11.1136 41.2315 11.2642 41.0952 11.446C40.9588 11.625 40.7642 11.7855 40.5114 11.9276C40.2585 12.0668 39.9219 12.1364 39.5014 12.1364ZM39.6378 11.233C40.0412 11.233 40.3821 11.1278 40.6605 10.9176C40.9389 10.7045 41.1506 10.4105 41.2955 10.0355C41.4403 9.65767 41.5128 9.22159 41.5128 8.72727C41.5128 8.23864 41.4418 7.81108 41.2997 7.4446C41.1577 7.07528 40.9474 6.78835 40.669 6.58381C40.3906 6.37642 40.0469 6.27273 39.6378 6.27273C39.2116 6.27273 38.8565 6.3821 38.5724 6.60085C38.2912 6.81676 38.0795 7.1108 37.9375 7.48295C37.7983 7.85227 37.7287 8.26705 37.7287 8.72727C37.7287 9.19318 37.7997 9.61648 37.9418 9.99716C38.0866 10.375 38.2997 10.6761 38.581 10.9006C38.8651 11.1222 39.2173 11.233 39.6378 11.233ZM46.9545 12.1364C46.4091 12.1364 45.9276 11.9986 45.5099 11.723C45.0923 11.4446 44.7656 11.0526 44.5298 10.5469C44.294 10.0384 44.1761 9.4375 44.1761 8.74432C44.1761 8.05682 44.294 7.46023 44.5298 6.95455C44.7656 6.44886 45.0938 6.05824 45.5142 5.78267C45.9347 5.5071 46.4205 5.36932 46.9716 5.36932C47.3977 5.36932 47.7344 5.44034 47.9815 5.58239C48.2315 5.72159 48.4219 5.88068 48.5526 6.05966C48.6861 6.2358 48.7898 6.38068 48.8636 6.49432H48.9489V3.27273H49.9545V12H48.983V10.9943H48.8636C48.7898 11.1136 48.6847 11.2642 48.5483 11.446C48.4119 11.625 48.2173 11.7855 47.9645 11.9276C47.7116 12.0668 47.375 12.1364 46.9545 12.1364ZM47.0909 11.233C47.4943 11.233 47.8352 11.1278 48.1136 10.9176C48.392 10.7045 48.6037 10.4105 48.7486 10.0355C48.8935 9.65767 48.9659 9.22159 48.9659 8.72727C48.9659 8.23864 48.8949 7.81108 48.7528 7.4446C48.6108 7.07528 48.4006 6.78835 48.1222 6.58381C47.8438 6.37642 47.5 6.27273 47.0909 6.27273C46.6648 6.27273 46.3097 6.3821 46.0256 6.60085C45.7443 6.81676 45.5327 7.1108 45.3906 7.48295C45.2514 7.85227 45.1818 8.26705 45.1818 8.72727C45.1818 9.19318 45.2528 9.61648 45.3949 9.99716C45.5398 10.375 45.7528 10.6761 46.0341 10.9006C46.3182 11.1222 46.6705 11.233 47.0909 11.233ZM58.1577 5.45455V6.30682H54.7656V5.45455H58.1577ZM55.7543 3.88636H56.7599V10.125C56.7599 10.4091 56.8011 10.6222 56.8835 10.7642C56.9688 10.9034 57.0767 10.9972 57.2074 11.0455C57.3409 11.0909 57.4815 11.1136 57.6293 11.1136C57.7401 11.1136 57.831 11.108 57.902 11.0966C57.973 11.0824 58.0298 11.071 58.0724 11.0625L58.277 11.9659C58.2088 11.9915 58.1136 12.017 57.9915 12.0426C57.8693 12.071 57.7145 12.0852 57.527 12.0852C57.2429 12.0852 56.9645 12.0241 56.6918 11.902C56.4219 11.7798 56.1974 11.5938 56.0185 11.3438C55.8423 11.0938 55.7543 10.7784 55.7543 10.3977V3.88636ZM61.5966 12.1534C61.1818 12.1534 60.8054 12.0753 60.4673 11.919C60.1293 11.7599 59.8608 11.5312 59.6619 11.233C59.4631 10.9318 59.3636 10.5682 59.3636 10.142C59.3636 9.76705 59.4375 9.46307 59.5852 9.23011C59.733 8.99432 59.9304 8.80966 60.1776 8.67614C60.4247 8.54261 60.6974 8.44318 60.9957 8.37784C61.2969 8.30966 61.5994 8.25568 61.9034 8.21591C62.3011 8.16477 62.6236 8.12642 62.8707 8.10085C63.1207 8.07244 63.3026 8.02557 63.4162 7.96023C63.5327 7.89489 63.5909 7.78125 63.5909 7.61932V7.58523C63.5909 7.16477 63.4759 6.83807 63.2457 6.60511C63.0185 6.37216 62.6733 6.25568 62.2102 6.25568C61.7301 6.25568 61.3537 6.3608 61.081 6.57102C60.8082 6.78125 60.6165 7.00568 60.5057 7.24432L59.5511 6.90341C59.7216 6.50568 59.9489 6.19602 60.233 5.97443C60.5199 5.75 60.8324 5.59375 61.1705 5.50568C61.5114 5.41477 61.8466 5.36932 62.1761 5.36932C62.3864 5.36932 62.6278 5.39489 62.9006 5.44602C63.1761 5.49432 63.4418 5.59517 63.6974 5.74858C63.956 5.90199 64.1705 6.13352 64.3409 6.44318C64.5114 6.75284 64.5966 7.16761 64.5966 7.6875V12H63.5909V11.1136H63.5398C63.4716 11.2557 63.358 11.4077 63.1989 11.5696C63.0398 11.7315 62.8281 11.8693 62.5639 11.983C62.2997 12.0966 61.9773 12.1534 61.5966 12.1534ZM61.75 11.25C62.1477 11.25 62.483 11.1719 62.7557 11.0156C63.0313 10.8594 63.2386 10.6577 63.3778 10.4105C63.5199 10.1634 63.5909 9.90341 63.5909 9.63068V8.71023C63.5483 8.76136 63.4545 8.80824 63.3097 8.85085C63.1676 8.89062 63.0028 8.92614 62.8153 8.95739C62.6307 8.9858 62.4503 9.01136 62.2741 9.03409C62.1009 9.05398 61.9602 9.07102 61.8523 9.08523C61.5909 9.11932 61.3466 9.17472 61.1193 9.25142C60.8949 9.32528 60.7131 9.4375 60.5739 9.58807C60.4375 9.7358 60.3693 9.9375 60.3693 10.1932C60.3693 10.5426 60.4986 10.8068 60.7571 10.9858C61.0185 11.1619 61.3494 11.25 61.75 11.25ZM71.0685 6.92045L70.1651 7.17614C70.1083 7.02557 70.0245 6.87926 69.9137 6.73722C69.8058 6.59233 69.658 6.47301 69.4705 6.37926C69.283 6.28551 69.043 6.23864 68.7504 6.23864C68.3498 6.23864 68.016 6.33097 67.7489 6.51562C67.4847 6.69744 67.3526 6.92898 67.3526 7.21023C67.3526 7.46023 67.4435 7.65767 67.6254 7.80256C67.8072 7.94744 68.0913 8.06818 68.4776 8.16477L69.4492 8.40341C70.0344 8.54545 70.4705 8.76278 70.7575 9.0554C71.0444 9.34517 71.1879 9.71875 71.1879 10.1761C71.1879 10.5511 71.0799 10.8864 70.864 11.1818C70.6509 11.4773 70.3526 11.7102 69.9691 11.8807C69.5856 12.0511 69.1396 12.1364 68.631 12.1364C67.9634 12.1364 67.4109 11.9915 66.9734 11.7017C66.5359 11.4119 66.2589 10.9886 66.1424 10.4318L67.0969 10.1932C67.1879 10.5455 67.3597 10.8097 67.6126 10.9858C67.8683 11.1619 68.2021 11.25 68.614 11.25C69.0827 11.25 69.4549 11.1506 69.7305 10.9517C70.0089 10.75 70.1481 10.5085 70.1481 10.2273C70.1481 10 70.0685 9.80966 69.9094 9.65625C69.7504 9.5 69.506 9.38352 69.1765 9.30682L68.0856 9.05114C67.4862 8.90909 67.0458 8.68892 66.7646 8.39062C66.4862 8.08949 66.3469 7.71307 66.3469 7.26136C66.3469 6.89205 66.4506 6.56534 66.658 6.28125C66.8683 5.99716 67.1538 5.77415 67.5146 5.61222C67.8782 5.45028 68.2901 5.36932 68.7504 5.36932C69.3981 5.36932 69.9066 5.51136 70.2759 5.79545C70.6481 6.07955 70.9123 6.45455 71.0685 6.92045ZM73.6392 9.61364L73.6222 8.36932H73.8267L76.6903 5.45455H77.9347L74.8835 8.53977H74.7983L73.6392 9.61364ZM72.7017 12V3.27273H73.7074V12H72.7017ZM76.8608 12L74.304 8.76136L75.0199 8.0625L78.1392 12H76.8608Z" fill="#A1A3AB"/>
                                    <path d="M20.0595 8.19048H16.1905V12.0595C16.1905 12.2648 16.1089 12.4616 15.9638 12.6067C15.8187 12.7518 15.6219 12.8333 15.4167 12.8333C15.2114 12.8333 15.0146 12.7518 14.8695 12.6067C14.7244 12.4616 14.6429 12.2648 14.6429 12.0595V8.19048H10.7738C10.5686 8.19048 10.3718 8.10895 10.2266 7.96383C10.0815 7.81872 10 7.62189 10 7.41667C10 7.21144 10.0815 7.01462 10.2266 6.8695C10.3718 6.72438 10.5686 6.64286 10.7738 6.64286H14.6429V2.77381C14.6429 2.56858 14.7244 2.37176 14.8695 2.22664C15.0146 2.08153 15.2114 2 15.4167 2C15.6219 2 15.8187 2.08153 15.9638 2.22664C16.1089 2.37176 16.1905 2.56858 16.1905 2.77381V6.64286H20.0595C20.2648 6.64286 20.4616 6.72438 20.6067 6.8695C20.7518 7.01462 20.8333 7.21144 20.8333 7.41667C20.8333 7.62189 20.7518 7.81872 20.6067 7.96383C20.4616 8.10895 20.2648 8.19048 20.0595 8.19048Z" fill="#F24E1E"/>
                                </svg>
                            </a>
                        </div>
                        <div className='today-tasks'>
                            <div className='today-date'>
                                <p>{day} {month}</p>
                                <p className='gray'>.Today</p>
                            </div>

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
                    <div className='shadow task-status'>
                        <div className="top-hometask">
                            <div className='small-logo'>
                                <img src={pending} />
                                <p>Task Status</p>
                            </div>
                        </div>

                        <div className='charts-container'>
                            <div style={{ padding: '10px' }}>
                                <CircularProgressBar progress={75} color="#05A301"/>
                                <div className="task-status-text">
                                    <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="3.5" cy="3.5" r="3.5" fill="#05A301"/>
                                    </svg>
                                    <p>Completered</p>
                                </div>
                               
                            </div>
                            <div style={{ padding: '10px' }}>
                                <CircularProgressBar progress={46} color="#0225FF"/>
                                <div className="task-status-text">
                                    <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="3.5" cy="3.5" r="3.5" fill="#0225FF"/>
                                    </svg>
                                    <p>In postgress</p>
                                </div>
                            </div>
                            <div style={{ padding: '10px' }}>
                                <CircularProgressBar progress={13} color="#F21E1E"/>
                                <div className="task-status-text">
                                    <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="3.5" cy="3.5" r="3.5" fill="#F21E1E"/>
                                    </svg>
                                    <p>Not Started</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='shadow task-extra-detail'>
                        <div className="top-hometask">
                            <div className='small-logo'>
                                <img src={pending} />
                                <p>Task Status</p>
                            </div>
                        </div>

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
            </div>
        </div>
    )
}

export default Home