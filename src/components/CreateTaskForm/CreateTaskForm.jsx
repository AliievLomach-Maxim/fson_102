import { Field, Form, Formik } from 'formik'
import { useId } from 'react'

const CreateTaskForm = ({ submit }) => {
	const taskId = useId()
	const handleSubmit = (values, actions) => {
		submit(values)
		actions.resetForm()
	}
	return (
		<Formik initialValues={{ text: '' }} onSubmit={handleSubmit}>
			<Form>
				<label htmlFor={taskId}>Task name:</label>
				<Field name='text' id={taskId} />
			</Form>
		</Formik>
	)
}

export default CreateTaskForm
