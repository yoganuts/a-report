import { connect } from 'react-redux'

import LoginForm from '../../components/LoginForm'
import * as actions from '../../actions/User'

const mapStateToProps = ({ User }) => ({
  user: User,
})

const mapDispatchToProps = dispatch => ({
  login() {
    dispatch(actions.login())
  },
  logout() {
    dispatch(actions.logout())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
