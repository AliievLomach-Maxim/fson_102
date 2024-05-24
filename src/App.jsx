import ControlledForm from './components/ControlledForm'
import FormikForm from './components/FormikForm/FormikForm'

function App() {
	// const [value, setValue] = useState('qwrtey')
	// const [userName, setUserName] = useState('user')

	const submit = (data) => {
		console.log('data :>> ', data)
	}

	return (
		<>
			<ControlledForm submit={submit} />
			<FormikForm submit={submit} />
		</>
	)
}

export default App
