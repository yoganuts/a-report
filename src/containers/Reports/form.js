import { connect } from 'react-redux'

import ReportForm from '../../components/Reports/form'
import * as actions from '../../actions/Report'

const mapStateToProps = ({ User }) => ({
  user: User,
})

const mapDispatchToProps = dispatch => ({
  onCreate() {
    dispatch(actions.createReport())
  },
  onUpdate() {
    dispatch(actions.updateReport())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ReportForm)
