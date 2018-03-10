import { createAction } from 'redux-actions'

const startLogin = createAction('START_LOGIN')
export const logout = createAction('START_LOGOUT')

export const login = (username, password) => {
  return async (dispatch, getState) => {
    dispatch(startLogin())
  }
}
