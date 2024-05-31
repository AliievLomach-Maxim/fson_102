import UseMemoExample from './UseMemoExample'
// import RefExample from './RefExample'

import SelectLang from './SelectLang'
import { langContext } from './LangContext'
import { useContext } from 'react'

function App() {
	const ctx = useContext(langContext)
	return (
		<>
			<SelectLang />
			<UseMemoExample />
			<p>{ctx.name}</p>
			{/* <RefExample /> */}
		</>
	)
}

export default App
