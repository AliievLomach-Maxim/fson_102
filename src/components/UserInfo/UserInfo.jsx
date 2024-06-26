import { useDispatch } from 'react-redux'
import { logOutOperation } from '../../store/auth/operations'

const UserInfo = () => {
	const dispatch = useDispatch()

	const handleLogOut = () => {
		dispatch(logOutOperation())
	}

	return (
		<div className='flex'>
			<p>Welcome, username</p>
			<button onClick={handleLogOut}>logOut</button>
		</div>
	)
}

export default UserInfo
