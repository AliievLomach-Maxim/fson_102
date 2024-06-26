import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://goit-task-manager.herokuapp.com/'

const setHeaderToken = (token) => {
	axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

const clearHeaderToken = () => {
	// axios.defaults.headers.common['Authorization'] = ''
	delete axios.defaults.headers.common['Authorization']
}

export const registerOperation = createAsyncThunk(
	'auth/register',
	async (userData, { rejectWithValue }) => {
		try {
			const { data } = await axios.post('users/signup', userData)
			setHeaderToken(data.token)
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
			setHeaderToken(data.token)
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
			await axios.post('users/logout')
			clearHeaderToken()
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)
