import { Route, Routes } from 'react-router-dom'
// import HomePage from './pages/HomePage'
// import ProductsPage from './pages/ProductsPage'
import Navbar from './components/Navbar/Navbar'
// import ProductDetailsPage from './pages/ProductDetailsPage'
import { lazy, Suspense } from 'react'
import TodoPage from './pages/TodoPage'

const ProductDetailsPage = lazy(() => import('./pages/ProductDetailsPage'))
const ProductsPage = lazy(() => import('./pages/ProductsPage'))
const HomePage = lazy(() => import('./pages/HomePage'))

const App = () => {
	return (
		<div>
			<Navbar />
			<Suspense fallback={null}>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/products' element={<ProductsPage />} />
					<Route path='/products/:productId' element={<ProductDetailsPage />}>
						<Route path='sub-product-a' element={<div>sub-product-a</div>} />
						<Route path='sub-product-b' element={<div>sub-product-b</div>} />
					</Route>
					<Route path='/todo' element={<TodoPage />} />
					<Route path='*' element={<div>404</div>} />
				</Routes>
			</Suspense>
		</div>
	)
}
export default App
