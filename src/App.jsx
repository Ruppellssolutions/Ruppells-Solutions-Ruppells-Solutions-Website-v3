import React, { Suspense, lazy } from 'react'
// import LandingPage from './components/screens/LandingPage'
const LandingPage = lazy(() => import("./components/screens/LandingPage"))
import ScreenLoader from './components/includes/loaders/ScreenLoader'


const App = () => {
	return (
		<>
			<Suspense fallback={<ScreenLoader />}>
				<LandingPage />
			</Suspense>
		</>
	)
}

export default App

