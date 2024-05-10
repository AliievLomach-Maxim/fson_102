import clsx from 'clsx'
import users from '../../data.json'
import Button from '../Button/Button'
import Card from '../Card/Card'
import css from './CardList.module.css'

// const isFlex = false

const CardList = () => {
	return (
		// <div className='container flex'>
		<div className={clsx(css.container, css.flex)}>
			{/* <div className={`${css.container} ${css.flex}`}> */}
			{users.map((user) => {
				return <Card key={user.id} name={user.name} phone={user.phone} />
			})}
			<Card name='Alex' email='qwe@qwe.com' phone={'050-50000000'}>
				<div>
					<p>TEST</p>
				</div>
			</Card>
			<Card name='Alex' email='qwe@qwe.com' phone={'050-50000000'}>
				<div>
					<Button>test</Button>
				</div>
			</Card>
		</div>
	)
}

export default CardList
