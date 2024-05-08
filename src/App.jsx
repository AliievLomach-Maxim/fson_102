import './App.css'
import Card from './components/Card'
import users from './data.json'

function App() {
	console.log('users :>> ', users)
	return (
		<div>
			{users.map((user) => {
				return <Card key={user.id} name={user.name} phone={user.phone} />
			})}
			<Card name='Alex' email='qwe@qwe.com' phone={'050-50000000'} />
		</div>
	)
}



// `qtwyertqyweryqwew${name}asdasd`

export default App

// function FN(params) {
// 	params.get()
// 	params.name

// 	return 100
// }

// FN({
// 	name:'asd',
// 	age:10,
// 	get:()=>{},
// 	copyData:fn(100)
// })
