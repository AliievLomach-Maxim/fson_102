import { useState } from 'react'
import posts from '../../posts.json'
import PageCounter from '../PageCounter/PageCounter'
import ArticlePost from '../ArticlePost/ArticlePost'

const Posts = () => {
	const [page, setPage] = useState(0)

	const isLastPage = page === posts.length - 1
	const isFirstPage = page === 0

	const handleChangePage = (params) => {
		if (params === 'prev') {
			setPage(page - 1)
		} else {
			setPage(page + 1)
		}
	}

	const currentPost = posts[page]

	return (
		<div>
			<button disabled={isFirstPage} onClick={() => handleChangePage('prev')}>
				prev
			</button>
			<button disabled={isLastPage} onClick={() => handleChangePage('next')}>
				next
			</button>
			<PageCounter page={page + 1} total={posts.length} />
			<ArticlePost title={currentPost.title} body={currentPost.body} />
		</div>
	)
}

export default Posts
