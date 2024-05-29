const ArticleList = ({ articles }) => {
	return (
		<ul>
			{articles.map((article) => (
				<li key={article.objectID}>
					<a href={article.url}>{article.title}</a>
				</li>
			))}
		</ul>
	)
}

export default ArticleList
