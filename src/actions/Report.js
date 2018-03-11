import { createAction } from 'redux-actions'
import { push } from 'react-router-redux'

const startFetchReports = createAction('START_FETCH_REPORTS')
const receiveReports = createAction('RECEIVE_REPORTS')

const startCreateReport = createAction('START_CREATE_REPORT')
const startUpdateReport = createAction('START_UPDATE_REPORT')
const receiveReport = createAction('RECEIVE_REPORT')

export const fetchReports = () => {
  return async (dispatch, getState) => {
    dispatch(startFetchReports())
    dispatch(receiveReports())
  }
}

export const createReport = () => {
  return async (dispatch, getState) => {
    dispatch(startCreateReport())
    dispatch(receiveReport())
    dispatch(push('/reports'))
  }
}

export const updateReport = () => {
  return async (dispatch, getState) => {
    dispatch(startUpdateReport())
    dispatch(receiveReport())
    dispatch(push('/reports'))
  }
}
