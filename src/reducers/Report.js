import { handleActions } from 'redux-actions'

const initialState = {
  reports: []
}

export default handleActions({
  START_FETCH_REPORTS: (state, action) => ({
    reports: []
  }),
  RECEIVE_REPORTS: (state, action) => ({
    reports: [
      {id: 1, content: 'good news', user: { username: 'foo' }},
      {id: 2, content: 'bad news', user: { username: 'bar' }},
    ]
  }),
  START_CREATE_REPORT: (state, action) => ({
    reports: state.reports.concat({id: state.reports.length + 1, content: 'add reports', user: { username: 'baz' }})
  }),
}, initialState)
