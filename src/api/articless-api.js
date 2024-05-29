import axios from 'axios'

axios.defaults.baseURL = 'http://hn.algolia.com/api/v1'

export const getArticlesApi = async (searchQuery, page) => {
	const { data } = await axios.get('/search', {
		params: {
			query: searchQuery,
			hitsPerPage: 10,
			page,
		},
	})
	return data.hits
}
