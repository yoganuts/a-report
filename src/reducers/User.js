import { handleActions } from 'redux-actions'

const initialState = {
  name: undefined,
  accessToken: undefined,
  client: undefined,
  uid: undefined,
}

export default handleActions({
  START_LOGIN: (state, action) => ({
    name: 'foo',
    uid: 'foo@example.com',
  }),
  START_LOGOUT: (state, action) => ({
    name: undefined,
    uid: undefined,
  }),
}, initialState)
