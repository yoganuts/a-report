import { createAction } from 'redux-actions'

const startFetchReports = createAction('START_FETCH_REPORTS')
const receiveReports = createAction('RECEIVE_REPORTS')

export const fetchReports = () => {
  return async (dispatch, getState) => {
    dispatch(startFetchReports())
    dispatch(receiveReports())
  }
}
