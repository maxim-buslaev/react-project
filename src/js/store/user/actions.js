import { requestCreator, GET_REQUEST, POST_REQUEST } from '~utils/request-creator'
const { USER_GET_DATA, USER_UPDATE } = require('./constants').default

export function UserGetData({ uuid }) {
  return (dispatch, getState) =>
    requestCreator(dispatch, {
      type: USER_GET_DATA,
      requestUrl: '/userapi/user/get',
      requestType: GET_REQUEST,
      headers: { 'X-Authorization': getState().auth.extraToken },
      resultField: 'data',
      sendObject: { mode: 'dev' },
    })
}

export function UserUpdate({ login, password }) {
  return (dispatch, getState) =>
    requestCreator(dispatch, {
      type: USER_UPDATE,
      requestUrl: '/userapi/user/update',
      requestType: POST_REQUEST,
      sendObject: { login, password },
    })
}
