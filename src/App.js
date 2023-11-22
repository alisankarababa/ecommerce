import './App.css';
import Home from './pages/Home';
import Shop from "./pages/Shop";

import { Switch, Route, Redirect } from 'react-router-dom/cjs/react-router-dom';

function App() {
  return (
		<div className="App font-fnt-mont">
			
            <Switch>
				<Route path="/shop">
					<Shop />
				</Route>
				<Route path="/home">
					<Home />
				</Route>
				<Route path="/">
					<Redirect to="/home" />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
