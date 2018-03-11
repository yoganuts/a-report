import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Button from 'material-ui/Button'

import ReportItem from '../ReportItem'

export default class Reports extends Component {
  componentWillMount() {
    this.props.onMount()
  }
  componentWillReceiveProps(nextProps) {
//    this.props.onUpdate()
  }
  render() {
    const editButton = this.props.user.uid && <Button component={Link} to="/reports/new" variant="raised">new</Button>

    return (
      <div>
        {editButton}
        {this.props.reports.map(report => (
          <ReportItem key={`report-item-${report.id}`} report={report} />
        ))}
      </div>
    )
  }
}

Reports.propTypes = {
  reports: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.integer,
      content: PropTypes.string,
      user: PropTypes.shape({
        username: PropTypes.string,
      }),
    })
  ),
  onMount: PropTypes.func.isRequired,
}
