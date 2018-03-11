import React from 'react'
import PropTypes from 'prop-types'

export default function ReportForm(props) {
  return (
    <div>
      Report Form
      <textarea name="content"></textarea>
      <button onClick={props.onCreate}>submit</button>
    </div>
  )
}

ReportForm.propTypes = {
  onCreate: PropTypes.func.isRequired,
}
