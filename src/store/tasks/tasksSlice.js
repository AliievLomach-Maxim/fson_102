import { createSlice } from '@reduxjs/toolkit'
import { createTaskOperation, getAllTasksOperation } from './oprations'
import { logOutOperation } from '../auth/operations'

const tasksSlice = createSlice({
	name: 'tasks',
	initialState: {
		tasks: null,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getAllTasksOperation.fulfilled, (state, { payload }) => {
				state.tasks = payload
			})
			.addCase(createTaskOperation.fulfilled, (state, { payload }) => {
				state.tasks.push(payload)
			})
			.addCase(logOutOperation.fulfilled, (state) => {
				state.tasks = null
			})
	},
})

export const tasksReducer = tasksSlice.reducer
