import { createSlice } from '@reduxjs/toolkit'
import { createTaskOperation, getAllTasksOperation } from './oprations'

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
	},
})

export const tasksReducer = tasksSlice.reducer
