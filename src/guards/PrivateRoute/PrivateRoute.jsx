import { useSelector } from 'react-redux'
import { selectLoggedIn } from '../../store/auth/selectors'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ component: Component, redirectTo = '/login' }) => {
	const isLoggedIn = useSelector(selectLoggedIn)
	return isLoggedIn ? Component : <Navigate to={redirectTo} />
}

export default PrivateRoute
