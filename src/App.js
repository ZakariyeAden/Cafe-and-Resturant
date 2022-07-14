import React from 'react'
import Home from './Components/Home'
import Service from './Components/Service'
import Menu from './Components/Menu'
import Form from './Components/Form'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import notify from './Components/Toast'
function App() {

  return (
    <div>
      <Home />
      <Service />
      <Menu/>
      <Form onClick={notify}/>
      
    </div>
  )
}

export default App
