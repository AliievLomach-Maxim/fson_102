import { createSlice } from '@reduxjs/toolkit'
import {
	logOutOperation,
	loginOperation,
	registerOperation,
} from './operations'

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: {
			name: '',
			email: '',
		},
		token: null,
		isLoggedIn: false,
	},
	extraReducers: (builder) => {
		builder
			.addCase(registerOperation.fulfilled, (state, { payload }) => {
				state.user = payload.user
				state.token = payload.token
				state.isLoggedIn = true
			})
			.addCase(loginOperation.fulfilled, (state, { payload }) => {
				state.user = payload.user
				state.token = payload.token
				state.isLoggedIn = true
			})
			.addCase(logOutOperation.fulfilled, (state) => {
				state.user = {
					name: '',
					email: '',
				}
				state.token = null
				state.isLoggedIn = false
			})
	},
})

export const authReducer = authSlice.reducer
