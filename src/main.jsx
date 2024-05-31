import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App copy.jsx'
import App from './App.jsx'
import './index.css'
import LangProvider from './LangContext'

// App>mount>unmount>mount

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<LangProvider>
			<App />
		</LangProvider>
	</React.StrictMode>
)
