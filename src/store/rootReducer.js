import { authReducer } from './auth/authSlice'
import { tasksReducer } from './tasks/tasksSlice'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
	key: 'token',
	storage,
	whitelist: ['token'],
}

const persistedAuthReducer = persistReducer(persistConfig, authReducer)

export const rootReducer = {
	auth: persistedAuthReducer,
	tasks: tasksReducer,
}
