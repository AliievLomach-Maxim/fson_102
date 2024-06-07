import { useEffect, useMemo, useState } from 'react'
import { getProductsApi } from '../api/products-api'
import { Link, useLocation, useSearchParams } from 'react-router-dom'

const ProductsPage = () => {
	const [products, setProducts] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(false)

	const [params, setParams] = useSearchParams()

	const location = useLocation()

	useEffect(() => {
		const getData = async () => {
			try {
				setIsLoading(true)
				const data = await getProductsApi()
				setProducts(data)
			} catch (error) {
				setError(true)
			} finally {
				setIsLoading(false)
			}
		}
		getData()
	}, [])

	const filteredProducts = useMemo(
		() =>
			products.filter((el) =>
				el.title
					.toLowerCase()
					.includes((params.get('filter') ?? '').toLowerCase())
			),
		[params, products]
	)

	const handleChange = ({ target: { value } }) => {
		params.set('filter', value)
		setParams(params)
	}

	return (
		<div>
			{isLoading && <p>loading..</p>}
			{error && <p>some error</p>}
			<label htmlFor='filter'>Filter by title:</label>
			<input
				type='text'
				id='filter'
				value={params.get('filter') ?? ''}
				onChange={handleChange}
			/>

			{filteredProducts.length > 0 &&
				filteredProducts.map((product) => (
					<div key={product.id}>
						<h4>{product.title}</h4>
						<Link to={String(product.id)} state={location}>
							Details
						</Link>
					</div>
				))}
		</div>
	)
}

export default ProductsPage
