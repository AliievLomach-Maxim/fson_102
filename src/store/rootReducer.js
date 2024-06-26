import { authReducer } from './auth/authSlice'
import { tasksReducer } from './tasks/tasksSlice'

export const rootReducer = {
	auth: authReducer,
	tasks: tasksReducer,
}
