import React from 'react'

import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from 'modules/StoreInformation'

function App() {
  return (
    <div className="container">
      {/* <BrowserRouter>
        <Switch>
          <Route path="/" exact> */}
      <Home />
      {/* </Route>
        </Switch>
      </BrowserRouter> */}
    </div>
  )
}

export default App
