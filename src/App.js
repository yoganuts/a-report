import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Reboot from 'material-ui/Reboot'

import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Reports from './containers/Reports'
import ReportNew from './components/Reports/new'
import ReportEdit from './components/Reports/edit'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Reboot />
        <Header />
        <h1>a-report</h1>
        <Route exact path="/" component={Home} />
        <Route path="/reports/new" component={ReportNew} />
        <Route path="/reports/:id/edit" component={ReportEdit} />
        <Route path="/reports" component={Reports} />
        <Footer />
      </div>
    )
  }
}

export default App
