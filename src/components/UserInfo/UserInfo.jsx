import { useDispatch, useSelector } from 'react-redux'
import { logOutOperation } from '../../store/auth/operations'
import { selectUser } from '../../store/auth/selectors'

const UserInfo = () => {
	const user = useSelector(selectUser)
	const dispatch = useDispatch()

	const handleLogOut = () => {
		dispatch(logOutOperation())
	}

	return (
		<div className='flex'>
			<p>Welcome, {user.name}</p>
			<button onClick={handleLogOut}>logOut</button>
		</div>
	)
}

export default UserInfo
