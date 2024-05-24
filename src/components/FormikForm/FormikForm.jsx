import { Field, Form, Formik, ErrorMessage } from 'formik'
import css from './FormikForm.module.css'
// import TextField from '../TextField'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
	name: Yup.string().min(2, 'Min 2').max(5, 'max 5').required('required'),
	phone: Yup.string().min(2, 'Min 2').required('required'),
	address: Yup.string().min(2, 'Min 2').required('required'),
	role: Yup.string().min(2, 'Min 2').required('required'),
})

const FormikForm = ({ submit }) => {
	return (
		<Formik
			initialValues={{
				name: '',
				phone: 'v',
				address: 'c',
				role: 'guest',
			}}
			onSubmit={(values, actions) => {
				submit(values)
				actions.resetForm()
			}}
			validationSchema={validationSchema}>
			<Form className={css.form}>
				<h2>FormikForm</h2>
				<Field type='text' name='name' />
				<ErrorMessage name='name' component='span' />
				<br />
				<Field type='text' name='phone' />
				<ErrorMessage name='phone' component='span' />
				<br />
				<Field type='text' name='address' />
				<ErrorMessage name='address' component='span' />
				<br />
				<Field as='select' name='role'>
					<option value='user'>User</option>
					<option value='guest'>Guest</option>
					<option value='admin'>Admin</option>
				</Field>
				<ErrorMessage name='role' component='span' />
				<br />
				<button type='submit'>Submit</button>
			</Form>
		</Formik>
		// <Formik
		// 	initialValues={{
		// 		name: '',
		// 		phone: 'v',
		// 		address: 'c',
		// 		role: 'guest',
		// 	}}
		// 	onSubmit={(values, actions) => {
		// 		submit(values)
		// 		actions.resetForm()
		// 	}}>
		// 	{(formik) => {
		// 		return (
		// 			<form onSubmit={formik.handleSubmit}>
		// 				<h2>ControlledForm</h2>
		// 				<TextField value={formik.values.name} onChange={formik.handleChange} name='name' />
		// 				<br />
		// 				<TextField value={formik.values.phone} name='phone' onChange={formik.handleChange} />
		// 				<br />
		// 				<TextField
		// 					value={formik.values.address}
		// 					onChange={formik.handleChange}
		// 					name='address'
		// 				/>
		// 				<br />
		// 				<TextField value={formik.values.role} onChange={formik.handleChange} name='role' />
		// 				<br />
		// 				<button type='submit'>Submit</button>
		// 			</form>
		// 		)
		// 	}}
		// </Formik>
	)
}

// name:''
// age:0

// const uniqIdForInput = useId()

// <input type="text" id={uniqIdForInput} />

// const users = [
// 	{name:'asd',
// 		age:123,
// 		id:uuid(),
// 		isAdmin:false
// 	},
// 	{name:'asd',
// 		age:123,
// 		id:2
// 	},
// 	{name:'asd',
// 		age:123,
// 		id:3
// 	},

// ]

export default FormikForm
