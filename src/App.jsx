import React, { Suspense, lazy, useEffect } from 'react'
// import LandingPage from './components/screens/LandingPage'
const LandingPage = lazy(() => import("./components/screens/LandingPage"))
import ScreenLoader from './components/includes/loaders/ScreenLoader'
import Lenis from '@studio-freight/lenis'
import Scene from './components/screens/Scene'


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
				<LandingPage />
				{/* <Scene /> */}
			</Suspense>
		</>
	)
}

export default App