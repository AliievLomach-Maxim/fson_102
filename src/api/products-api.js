import axios from 'axios'

axios.defaults.baseURL = 'https://api.escuelajs.co/api/v1'

export const getProductsApi = async () => {
	const { data } = await axios.get('/products')
	return data
}

export const getSingleProductApi = async (id) => {
	const { data } = await axios.get(`/products/${id}`)
	return data
}
