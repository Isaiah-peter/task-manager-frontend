
import './App.css'
import Register from './component/auth/Register'
import Login from './component/auth/Login'
import Navbar from './component/dashboard/navbar'
import SideBar from './component/dashboard/sidebar'

function App() {
  

  return (
    <div className='app-layout' >
      <Navbar />
      <div className='main-body'>
        <SideBar />
      </div>
    </div>
  )
}

export default App
