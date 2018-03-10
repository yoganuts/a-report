import { connect } from 'react-redux'

import Reports from '../../components/Reports'
import * as actions from '../../actions/Report'

const mapStateToProps = ({ User, Report }) => ({
  user: User,
  reports: Report.reports,
})

const mapDispatchToProps = dispatch => ({
  onMount() {
    dispatch(actions.fetchReports())
  },
  onUpdate() {
    dispatch(actions.fetchReports())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Reports)
