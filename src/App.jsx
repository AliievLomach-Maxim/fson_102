import { Route, Routes } from 'react-router-dom'
import AppBar from './components/AppBar/AppBar'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import TasksPage from './pages/TasksPage'
import LoginPage from './pages/LoginPage'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { refreshUser } from './store/auth/operations'
import { selectIsRefreshing } from './store/auth/selectors'
import RestrictedRoute from './guards/RestrictedRoute/RestrictedRoute'
import PrivateRoute from './guards/PrivateRoute/PrivateRoute'

const App = () => {
	const isRefreshing = useSelector(selectIsRefreshing)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(refreshUser())
	}, [dispatch])

	return isRefreshing ? (
		<p>refreshing user....</p>
	) : (
		<div>
			<AppBar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route
					path='/login'
					element={<RestrictedRoute component={<LoginPage />} />}
				/>
				<Route
					path='/register'
					element={
						<RestrictedRoute component={<RegisterPage />} redirectTo='/' />
					}
				/>
				<Route
					path='/tasks'
					element={<PrivateRoute component={<TasksPage />} />}
				/>
				<Route path='*' element={<div>404</div>} />
			</Routes>
		</div>
	)
}
export default App
