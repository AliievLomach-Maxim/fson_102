import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://task-manager-api.goit.global/'

const setToken = (token) => {
	axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

const removeToken = () => {
	// axios.defaults.headers.common['Authorization'] = ''
	delete axios.defaults.headers.common['Authorization']
}

export const registerOperation = createAsyncThunk(
	'auth/register',
	async (userData, { rejectWithValue }) => {
		try {
			const { data } = await axios.post('users/signup', userData)
			setToken(data.token)
			return data
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const loginOperation = createAsyncThunk(
	'auth/login',
	async (userData, { rejectWithValue }) => {
		try {
			const { data } = await axios.post('users/login', userData)
			setToken(data.token)
			return data
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const logOutOperation = createAsyncThunk(
	'auth/logOut',
	async (_, { rejectWithValue }) => {
		try {
			await axios.post('users/logOut')
			return removeToken()
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

/*
 *
 * GET @ /users/me
 * headers: Authorization: Bearer token
 */

export const refreshUser = createAsyncThunk(
	'auth/refresh',
	async (_, { getState, rejectWithValue }) => {
		try {
			// set Token to axios headers
			const state = getState()
			const localToken = state.auth.token
			setToken(localToken)

			const { data } = await axios('/users/me')
			return data
		} catch (error) {
			return rejectWithValue(error.message)
		}
	},
	{
		condition: (_, { getState }) => {
			const state = getState()
			const localToken = state.auth.token
			return localToken !== null
		},
	}
)
