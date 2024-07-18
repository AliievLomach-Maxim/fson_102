import { useSelector } from 'react-redux'
import Authorization from '../Authorization/Authorization'
import Navigation from '../Navigation/Navigation'
import UserInfo from '../UserInfo/UserInfo'
import { selectLoggedIn } from '../../store/auth/selectors'

const AppBar = () => {
	const isLoggedIn = useSelector(selectLoggedIn)

	return (
		<div className='flex jc-sb'>
			<Navigation />
			{isLoggedIn ? <UserInfo /> : <Authorization />}
		</div>
	)
}

export default AppBar
