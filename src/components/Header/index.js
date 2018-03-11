import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Button from 'material-ui/Button'

import LoginForm from '../../containers/LoginForm'

export default function Header(props) {
  return (
    <AppBar>
      <Toolbar>
        <Button color="inherit" component={Link} to="/">A-Report</Button>
        <Button color="inherit" component={Link} to="/reports">Reports</Button>
        <LoginForm />
      </Toolbar>
    </AppBar>
  )
}
