import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Cart from './pages/Cart'
import SignUp from './pages/Auth/Signup'
import SignIn from './pages/Auth/Signin'
import AdminPanel from './pages/Admin'

import './assets/css/main.css'
import '../node_modules/tailwindcss/dist/tailwind.min.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/admin" component={AdminPanel} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
