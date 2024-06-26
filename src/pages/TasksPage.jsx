import { useDispatch, useSelector } from 'react-redux'
import { selectTasks } from '../store/tasks/selectors'
import TasksList from '../components/TasksList/TasksList'
import CreateTaskForm from '../components/CreateTaskForm/CreateTaskForm'
import { useEffect } from 'react'
import {
	createTaskOperation,
	getAllTasksOperation,
} from '../store/tasks/oprations'

const TasksPage = () => {
	const dispatch = useDispatch()
	const tasks = useSelector(selectTasks)

	const createTask = (task) => {
		dispatch(createTaskOperation(task))
	}
	useEffect(() => {
		dispatch(getAllTasksOperation())
	}, [dispatch])

	return (
		<div>
			<CreateTaskForm submit={createTask} />
			{tasks && <TasksList tasks={tasks} />}
		</div>
	)
}

export default TasksPage
