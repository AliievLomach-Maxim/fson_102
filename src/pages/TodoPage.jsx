import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, fetchTodo } from '../store/todo/todoOps'
import TodoList from '../components/TodoList/TodoList'

const TodoPage = () => {
	const todos = useSelector((state) => state.todo.todo)
	const isLoading = useSelector((state) => state.todo.isLoading)
	const error = useSelector((state) => state.todo.error)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchTodo())
	}, [dispatch])

	const handleDelete = (id) => {
		dispatch(deleteTodo(id))
	}

	return (
		<div>
			{isLoading && <h2>loading..</h2>}
			{error && <h2>{error}</h2>}
			{todos && <TodoList todos={todos} handleDelete={handleDelete} />}
		</div>
	)
}

export default TodoPage
