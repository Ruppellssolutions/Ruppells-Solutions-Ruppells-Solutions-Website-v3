import React, { Suspense, lazy, useEffect } from 'react'
const LandingPage = lazy(() => import("./components/screens/LandingPage"))
import ScreenLoader from './components/includes/loaders/ScreenLoader'
import Lenis from '@studio-freight/lenis'
// import Scene from './components/screens/Scene'
import { Route, Routes } from 'react-router-dom'
import Contact from './components/screens/Contact'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import AboutUs from './components/screens/AboutUs'


const App = () => {
	useEffect(() => {
		const lenis = new Lenis()

		const raf = (time) => {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}
		requestAnimationFrame(raf);
	}, [])

	return (
		<>
			<ToastContainer
				position="bottom-center"
				autoClose={2000}
				hideProgressBar={true}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable
				containerId="toast-container"
				theme="dark"
			/>
			<Suspense fallback={<ScreenLoader />}>
				<Routes>
					<Route path='' element={<LandingPage />} />
					<Route path='/about-us' element={<AboutUs />} />
					<Route path='/contact-us' element={<Contact />} />
				</Routes>
			</Suspense>
		</>
	)
}

export default App