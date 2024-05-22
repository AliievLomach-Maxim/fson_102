import ControlledForm from './components/ControlledForm'

function App() {
	// const [value, setValue] = useState('qwrtey')
	// const [userName, setUserName] = useState('user')

	const submit = (data) => {
		console.log('data :>> ', data)
	}

	return (
		<>
			<ControlledForm submit={submit} />
		</>
	)
}

export default App
