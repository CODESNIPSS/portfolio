import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/layout";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
	return (
		<Routes>
			<Route exact path="/" element={ <Layout /> } />
		</Routes>
	)
}

export default App;