const TasksList = ({ tasks }) => {
	return (
		<ul>
			{tasks.map((el) => (
				<li key={el.id}>{el.text}</li>
			))}
		</ul>
	)
}

export default TasksList
