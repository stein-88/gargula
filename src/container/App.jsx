import React from 'react'
import {
	BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom'
import TicTacToe from '@components/TicTacToe'
import Footer from '@components/Footer'
import { HOMEPATH } from '@constants/config'

const App = () => {
	const finalPath = HOMEPATH || '/'
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<TicTacToe />} path={finalPath} />
				<Route element={<Navigate replace to={finalPath} />} path="*" />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}

export default App
