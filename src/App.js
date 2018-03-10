import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Reports from './components/Reports'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h1>a-report</h1>
        <Route exact path="/" component={Home} />
        <Route path="/reports" component={Reports} />
        <Footer />
      </div>
    )
  }
}

export default App
