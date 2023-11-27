import { Switch, Route, Redirect } from 'react-router-dom/cjs/react-router-dom';

import Shop from "../pages/Shop"
import Home from "../pages/Home"
import Product from "../pages/Product"

export default function PageContent() {
	return (
        
		<Switch>
            <Route path="/shop/product">
                <Product />
			</Route>
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
	);
}
