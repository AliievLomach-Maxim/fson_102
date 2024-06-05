import { useEffect, useState } from 'react'
import { getProductsApi } from '../api/products-api'
import { Link } from 'react-router-dom'

const ProductsPage = () => {
	const [products, setProducts] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(false)

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

	return (
		<div>
			{products.length > 0 &&
				products.map((product) => (
					<div key={product.id}>
						<h4>{product.title}</h4>
						<Link to={String(product.id)}>Details</Link>
					</div>
				))}
		</div>
	)
}

export default ProductsPage
