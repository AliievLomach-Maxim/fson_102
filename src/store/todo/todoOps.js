import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://dummyjson.com/'

// export const fetchTodo = createAsyncThunk('todo/fetchAllTodo', async () => {
// 	const { data } = await axios('todos')
// 	return data
// })
export const fetchTodo = createAsyncThunk('todo/fetchAllTodo', async () => {
	const { data } = await axios('todos')
	return data
})
// error from API >>>
// export const deleteTodo = createAsyncThunk(
// 	'todo/deleteTodo',
// async (id, thunkAPI) => {
// 		try {
// 			const { data } = await axios.delete(`todos23/${id}`)
// 			return data
// 		} catch (error) {
// 			return thunkAPI.rejectWithValue(error.response.data.message)
// 		}
// 	}
// )

export const deleteTodo = createAsyncThunk('todo/deleteTodo', async (id) => {
	const { data } = await axios.delete(`todos23/${id}`)
	return data
})

// dispatch(fetchTodo.pending)
// dispatch(fetchTodo.fulfilled)
// dispatch(fetchTodo.rejected)

// dispatch(deleteTodo.pending)
// dispatch(deleteTodo.fulfilled)
// dispatch(deleteTodo.rejected)
