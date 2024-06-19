import { balanceReducer } from './balanceSlice'
import { itemsReducer } from './itemsSlice'
import storage from 'redux-persist/lib/storage'
import persistReducer from 'redux-persist/es/persistReducer'
import { todoReducer } from './todo/todoSlice'

const persistConfig = {
	key: 'balance',
	storage,
	whitelist: ['value'],
}

const persistConfig2 = {
	key: 'items',
	storage,
}

const balancePersistedReducer = persistReducer(persistConfig, balanceReducer)
const itemsPersistedReducer = persistReducer(persistConfig2, itemsReducer)

export const rootReducer = {
	balance: balancePersistedReducer,
	items: itemsPersistedReducer,
	todo: todoReducer,
}
