import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

export default function LoginForm(props) {
  return (
    <div>
      {props.user.uid ? (
        <Fragment>
          {props.user.uid}<button onClick={props.logout}>Logout</button>
        </Fragment>
      ) : (
        <Fragment>
          <input type="text" name="username" />
          <input type="password" name="password" />
          <button onClick={props.login}>Login</button>
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
