import { useEffect, useMemo, useState } from 'react'
import { getArticlesApi } from './api/articless-api'
import ArticleList from './components/ArticleList/ArticleList'
import SearchArticlesForm from './components/SearchArticlesForm/SearchArticlesForm'

// mounting
// some action

function App() {
	const [counter, setCounter] = useState(0)

	const [articles, setArticles] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(false)
	const [page, setPage] = useState(1)
	const [query, setQuery] = useState('')

	useEffect(() => {
		const fetchData = async () => {
			try {
				setError(false)
				setIsLoading(true)
				const data = await getArticlesApi(query, page)
				setArticles((prev) => [...prev, ...data])
			} catch (e) {
				setError(true)
			} finally {
				setIsLoading(false)
			}
		}
		query && fetchData()
	}, [page, query])

	const handleSubmit = async (searchQuery) => {
		setQuery(searchQuery)
		setArticles([])
		setPage(1)
	}

	const handleLoadMore = async () => {
		setPage(page + 1)
	}

	const sortedArticles = useMemo(
		() =>
			articles.toSorted((a, b) => {
				console.log('sorting')
				return a.title.localeCompare(b.title)
			}),
		[articles]
	)

	return (
		<>
			<button onClick={() => setCounter(counter + 1)}>{counter}</button>
			<SearchArticlesForm submit={handleSubmit} />

			{error && (
				<p>
					<b>Oops....some error! pls reload</b>
				</p>
			)}
			{sortedArticles.length > 0 && <ArticleList articles={sortedArticles} />}
			{isLoading && (
				<p>
					<b>loading...</b>
				</p>
			)}
			{articles.length > 0 && <button onClick={handleLoadMore}>load more..</button>}
		</>
	)
}

export default App
