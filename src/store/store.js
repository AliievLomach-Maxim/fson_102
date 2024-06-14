import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer'
import {
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// const persistConfig = {
// 	key: 'balance',
// 	storage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

export const persistor = persistStore(store)

// import { composeWithDevTools } from '@redux-devtools/extension'
// import { combineReducers, createStore } from 'redux'
// import { balanceReducer } from './balanceSlice'
// import { itemsReducer } from './itemsSlice'

// const reducer = combineReducers({
// 	balance: balanceReducer,
// 	items: itemsReducer,
// })

// export const store = createStore(reducer, composeWithDevTools())
