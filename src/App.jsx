import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import Navbar from './components/Navbar/Navbar'
import ProductDetailsPage from './pages/ProductDetailsPage'

const App = () => {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/products' element={<ProductsPage />} />
				<Route path='/products/:productId' element={<ProductDetailsPage />}>
					<Route path='sub-product-a' element={<div>sub-product-a</div>} />
					<Route path='sub-product-b' element={<div>sub-product-b</div>} />
				</Route>
				<Route path='*' element={<div>404</div>} />
			</Routes>
		</div>
	)
}
export default App

{
	/* <Wrapper>
	jladgbvnk;asdlsd
	ASDasd
	ASDASD
</Wrapper>



const Wrapper = ({children}) => {
  return (
	<div>
		{children}
	</div>
  )
}

export default Wrapper */
}
