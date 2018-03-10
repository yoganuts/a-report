import React from 'react'
import PropTypes from 'prop-types'

export default function ReportItem(props) {
  return (
    <div>
      <p>{props.report.user.username}</p>
      <pre>{props.report.content}</pre>
    </div>
  )
}

ReportItem.propTypes = {
  report: PropTypes.shape({
    content: PropTypes.string,
    user: PropTypes.shape({
      username: PropTypes.string,
    }),
  }).isRequired,
}
