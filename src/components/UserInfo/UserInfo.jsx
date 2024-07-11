import { useSelector, useDispatch } from 'react-redux'
import { logOutOperation } from '../../store/auth/operations'
import { selectUser } from '../../store/auth/selectors'

const UserInfo = () => {
	const {name} = useSelector(selectUser)
	const dispatch = useDispatch()

	const handleLogOut = () => {
		dispatch(logOutOperation())
	}

	return (
		<div className='flex'>
			<p>Welcome, {name}</p>
			<button onClick={handleLogOut}>logOut</button>
		</div>
	)
}

export default UserInfo
