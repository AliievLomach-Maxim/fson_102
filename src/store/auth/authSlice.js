import { createSlice } from '@reduxjs/toolkit'
import {
	loginOperation,
	logOutOperation,
	refreshUser,
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
		isRefreshing: false,
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
				state.user = { name: '', email: '' }
				state.token = null
				state.isLoggedIn = false
			})
			.addCase(refreshUser.pending, (state) => {
				state.isRefreshing = true
			})
			.addCase(refreshUser.fulfilled, (state, { payload }) => {
				state.user = payload
				state.isLoggedIn = true
				state.isRefreshing = false
			})
	},
})

export const authReducer = authSlice.reducer
