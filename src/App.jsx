import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import AppBar from './components/AppBar/AppBar'

import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import PublicRoute from './components/PublicRoute/PublicRoute'

import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import TasksPage from './pages/TasksPage'
import LoginPage from './pages/LoginPage'

import { currentOperation } from './store/auth/operations'

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(currentOperation())
	}, [dispatch]);

	return (
		<div>
			<AppBar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route element={<PublicRoute />}>
					<Route path='/login' element={<LoginPage />} />
					<Route path='/register' element={<RegisterPage />} />
				</Route>
				<Route element={<PrivateRoute />}>
					<Route path='/tasks' element={<TasksPage />} />
				</Route>
				<Route path='*' element={<div>404</div>} />
			</Routes>
		</div>
	)
}
export default App
