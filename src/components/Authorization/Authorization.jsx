import { Link } from 'react-router-dom'

const Authorization = () => {
	return (
		<div className='flex'>
			<Link to='/login'>Login</Link>
			<Link to='/register'>Register</Link>
		</div>
	)
}

export default Authorization
