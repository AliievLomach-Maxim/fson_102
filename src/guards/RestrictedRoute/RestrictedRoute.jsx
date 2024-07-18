import { useSelector } from 'react-redux'
import { selectLoggedIn } from '../../store/auth/selectors'
import { Navigate } from 'react-router-dom'

const RestrictedRoute = ({ component: Component, redirectTo = '/tasks' }) => {
	const isLoggedIn = useSelector(selectLoggedIn)
	return isLoggedIn ? <Navigate to={redirectTo} /> : Component
}

export default RestrictedRoute
