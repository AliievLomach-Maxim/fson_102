import { Route, Routes } from 'react-router-dom'
import AppBar from './components/AppBar/AppBar'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import TasksPage from './pages/TasksPage'
import LoginPage from './pages/LoginPage'

const App = () => {
	return (
		<div>
			<AppBar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/register' element={<RegisterPage />} />
				<Route path='/tasks' element={<TasksPage />} />
				<Route path='*' element={<div>404</div>} />
			</Routes>
		</div>
	)
}
export default App
