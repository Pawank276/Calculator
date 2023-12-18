import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar'
import Display from './Components/Display'
import Alert from "./Components/Alert";
import './App.css'

function App() {
  const [mode, setMode] = useState('dark')
  const [btnText, setBtnText] = useState('Light Mode')
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("light Mode activated", "success")
      setBtnText("Dark Mode")
    } else {
      setMode('dark')
      document.body.style.backgroundColor = '#111315';
      showAlert("dark Mode activated", "success")
      setBtnText("Light Mode")
    }
  }

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} btnText={btnText} />
      <div className="container-fluid">
        <Alert alert={alert} />
        <Display />
      </div>
    </>
  )
}

export default App
