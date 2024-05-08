const Card = ({ name, email, phone }) => {
	return (
		<>
			<div>
				<h2>Name: {name}</h2>
				<hr />
				<div>
					{email && <p>Email: {email}</p>}
					<p>phone: {phone}</p>
				</div>
			</div>
			<hr />
		</>
	)
}

export default Card
