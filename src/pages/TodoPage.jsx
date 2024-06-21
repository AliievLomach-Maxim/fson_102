import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, fetchTodo } from '../store/todo/todoOps'
import TodoList from '../components/TodoList/TodoList'
import FilterText from '../components/FilterText/FilterText'
import {
	selectFilteredTodo,
	selectLoadingTodo,
	selectErrorTodo,
} from '../store/todo/todoSlice'

const TodoPage = () => {
	const todos = useSelector(selectFilteredTodo)
	// const todos = useSelector(selectTodo)
	// const filterText = useSelector(selectFilter)
	const isLoading = useSelector(selectLoadingTodo)
	const error = useSelector(selectErrorTodo)
	// const c = 10
	// const a = useSelector(selectA)
	// const b = useSelector(selectB)
	// const total = a + b +c
	// const total = useSelector(selectTotal)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchTodo())
	}, [dispatch])

	const handleDelete = (id) => {
		dispatch(deleteTodo(id))
	}

	// const filterTodos = todos?.filter((el) =>
	// 	el.todo.toLowerCase().includes(filterText.toLowerCase())
	// )

	return (
		<div>
			{isLoading && <h2>loading..</h2>}
			{error && <h2>{error}</h2>}
			<FilterText />
			{todos && <TodoList todos={todos} handleDelete={handleDelete} />}
		</div>
	)
}

export default TodoPage
