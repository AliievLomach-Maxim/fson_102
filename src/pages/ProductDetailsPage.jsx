import { Link, useParams, Outlet } from 'react-router-dom'
import { getSingleProductApi } from '../api/products-api'
import { useEffect, useState } from 'react'

const ProductDetailsPage = () => {
	const { productId } = useParams()
	const [product, setProduct] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(false)

	useEffect(() => {
		const getData = async () => {
			try {
				setIsLoading(true)
				const data = await getSingleProductApi(productId)
				setProduct(data)
			} catch (error) {
				setError(true)
			} finally {
				setIsLoading(false)
			}
		}
		getData()
	}, [productId])

	return (
		<div>
			{product && (
				<div>
					<h4>price:{product.price}</h4>
					<h4>title:{product.title}</h4>
				</div>
			)}
			<nav>
				<Link to='sub-product-a'> sub-product-a</Link>
				<Link to='sub-product-b'> sub-product-b</Link>
			</nav>
			<Outlet />
		</div>
	)
}

export default ProductDetailsPage
