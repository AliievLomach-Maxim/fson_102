import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const createTaskOperation = createAsyncThunk(
	'tasks/create',
	async (task, { rejectWithValue }) => {
		try {
			const { data } = await axios.post('/tasks', task)
			return data
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const getAllTasksOperation = createAsyncThunk(
	'tasks/getAll',
	async (_, { rejectWithValue }) => {
		try {
			const { data } = await axios('/tasks')
			return data
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)
