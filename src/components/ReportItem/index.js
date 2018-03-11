import React from 'react'
import PropTypes from 'prop-types'
import Card, { CardContent } from 'material-ui/Card'

export default function ReportItem(props) {
  return (
    <div>
      <Card>
        <CardContent>
          <p>{props.report.user.username}</p>
          <pre>{props.report.content}</pre>
        </CardContent>
      </Card>
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
