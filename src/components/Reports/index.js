import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ReportItem from '../ReportItem'

export default class Reports extends Component {
  componentWillMount() {
    this.props.onMount()
  }
  componentWillReceiveProps(nextProps) {
//    this.props.onUpdate()
  }
  render() {
    return (
      <div>
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
