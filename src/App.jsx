import React, { Suspense, lazy, useEffect } from 'react'
const LandingPage = lazy(() => import("./components/screens/LandingPage"))
import ScreenLoader from './components/includes/loaders/ScreenLoader'
import Lenis from '@studio-freight/lenis'
// import Scene from './components/screens/Scene'
import { Route,  Routes } from 'react-router-dom'
import Contact from './components/screens/Contact'


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
			<Suspense fallback={<ScreenLoader />}>
				<Routes>
					<Route path='' element={<LandingPage />} />
					<Route path='/contact-us' element={<Contact />} />
				</Routes>
			</Suspense>
		</>
	)
}

export default App