import { requestCreator } from './action-creators'
import { API_URL, GET_REQUEST, POST_REQUEST } from '~constants'

export function getData() {
	return (dispatch, getState) =>
		requestCreator(dispatch, {
			type: 'GET_DATA',
			requestUrl: '/userapi/user/get',
			requestType: GET_REQUEST,
			headers: { 'X-Authorization': getState().auth.extraToken },
			resultField: 'data',
			sendObject: { mode: 'dev' }
		})
}

export function sberLoginUpdate({ login, password }) {
	return dispatch =>
		requestCreator(dispatch, {
			type: 'SBER_LOGIN_UPDATE',
			requestUrl: '/userapi/user/sberlogin/update',
			requestType: POST_REQUEST,
			sendObject: { login, password }
		})
}
