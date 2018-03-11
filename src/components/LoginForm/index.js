import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import Input from 'material-ui/Input'

export default function LoginForm(props) {
  return (
    <div>
      {props.user.uid ? (
        <Fragment>
          {props.user.uid}<Button variant="raised" color="secondary" onClick={props.logout}>Logout</Button>
        </Fragment>
      ) : (
        <Fragment>
          <Input type="text" name="username" placeholder="username" />
          <Input type="password" name="password" placeholder="password" />
          <Button variant="raised" color="secondary" onClick={props.login}>Login</Button>
        </Fragment>
      )}
    </div>
  )
}

LoginForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
  }),
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
}
