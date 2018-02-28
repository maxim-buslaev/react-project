import { AUTH_SET, REQUEST, SUCCESS, FAIL } from '~constants'

const initialState = {
	loadingToken: null,
	token: '',
	error: ''
}

export default (state = initialState, { type, payload = {} }) => {
	const { token, error } = payload

	switch (type) {
		case AUTH_SET + SUCCESS: {
			return { ...state, loadingToken: false, token, error: '' }
		}

		case AUTH_SET + FAIL: {
			return { ...state, loadingToken: null, token: '', error }
		}

		default: {
			return state
		}
	}
}
