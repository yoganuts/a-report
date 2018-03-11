import React from 'react'
import PropTypes from 'prop-types'
import Input from 'material-ui/Input'
import Button from 'material-ui/Button'

export default function ReportForm(props) {
  return (
    <div>
      content: <Input name="content" multiline placeholder="content" />
      <Button variant="raised" color="primary" onClick={props.onCreate}>submit</Button>
    </div>
  )
}

ReportForm.propTypes = {
  onCreate: PropTypes.func.isRequired,
}
