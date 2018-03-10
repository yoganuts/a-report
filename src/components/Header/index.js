import React from 'react'
import { Link } from 'react-router-dom'

import LoginForm from '../../containers/LoginForm'

export default function Header(props) {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/reports">Reports</Link></li>
      <li><LoginForm /></li>
    </ul>
  )
}
