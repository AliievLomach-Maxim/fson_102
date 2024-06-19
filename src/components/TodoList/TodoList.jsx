const TodoList = ({ todos, handleDelete }) => {
	return (
		<ul>
			{todos.map((todo) => (
				<li key={todo.id}>
					{todo.todo}
					<button onClick={() => handleDelete(todo.id)}>delete</button>
				</li>
			))}
		</ul>
	)
}

export default TodoList
