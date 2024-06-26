import { Field, Form, Formik } from 'formik'
import { useId } from 'react'

const LoginForm = ({ submit }) => {
	const passwordId = useId()
	const emailId = useId()

	const handleSubmit = (values, actions) => {
		submit(values)
		actions.resetForm()
	}
	return (
		<Formik initialValues={{ password: '', email: '' }} onSubmit={handleSubmit}>
			<Form>
				<label htmlFor={emailId}>Email: </label>
				<Field name='email' id={emailId} />
				<br />
				<label htmlFor={passwordId}>Password: </label>
				<Field name='password' id={passwordId} type='password' />
				<hr />
				<button type='submit'>Login</button>
			</Form>
		</Formik>
	)
}

export default LoginForm
