import { useDispatch, useSelector } from "react-redux";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import {
	actionCreatorShoppingCartDecrementProductCount,
	actionCreatorShoppingCartIncrementProductCount,
	actionCreatorShoppingCartRemoveProduct,
} from "../store/actions/actionsShoppingCart";

function CountButtonGroup({
	currentCount,
	hIncrement,
	hDecrement,
	minCount,
	maxCount,
}) {
	return (
		<div className="text-[1.125rem] text-clr-dark w-[80px] h-[40px] border-[1px] rounded-[5px] flex items-stretch m-auto">
			<button
				disabled={currentCount === minCount}
				className="flex-[1] disabled:opacity-50"
				onClick={hDecrement}
			>
				-
			</button>
			<div className="flex-[2] border-x-[1px] flex justify-center items-center">
				<span>{currentCount}</span>
			</div>
			<button
				disabled={currentCount === maxCount}
				className="flex-[1] disabled:opacity-50"
				onClick={hIncrement}
			>
				+
			</button>
		</div>
	);
}

export default function ShoppingCart() {
	const cart = useSelector((store) => store.reducerShoppingCart.cart);
	const dispatch = useDispatch();

	return (
		<div className="container-big py-[2.5rem]">
			<p className="text-left mb-[1.25rem] font-semibold">
				Sepetim ({cart.length} Ürün)
			</p>
			<TableContainer>
				<Table>
					<TableBody>
						{cart.map((cartItem) => (
							<TableRow
								key={cartItem.product.id}
								className="h-[150px] p-[1rem]"
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
							>
								<TableCell className="w-[90px]" component="th" scope="row">
									<img
										className="w-full h-full object-cover"
										src={cartItem.product.images[0].url}
										alt="product_img"
									/>
								</TableCell>
								<TableCell className="max-w-[400px]"  sx={{ display: { sm: 'none', md: 'table-cell' }}} component="th" scope="row">
									<span className="text-clr-dark font-semibold">
										{cartItem.product.name}
									</span>{" "}
									<span>{cartItem.product.description}</span>
								</TableCell>
								<TableCell align="right">
									<span className="text-clr-primary font-semibold">
										{(cartItem.product.price * cartItem.count).toFixed(2)} TL
									</span>
								</TableCell>
								<TableCell>
									<CountButtonGroup
										currentCount={cartItem.count}
										hIncrement={() =>
											dispatch(
												actionCreatorShoppingCartIncrementProductCount(
													cartItem.product.id
												)
											)
										}
										hDecrement={() =>
											dispatch(
												actionCreatorShoppingCartDecrementProductCount(
													cartItem.product.id
												)
											)
										}
										minCount={1}
										maxCount={10}
									/>
								</TableCell>
								<TableCell align="right">
									<i
										onClick={() =>
											dispatch(
												actionCreatorShoppingCartRemoveProduct(
													cartItem.product.id
												)
											)
										}
										className="fa-regular fa-trash-can hover:text-clr-danger text-[1.25rem]"
									></i>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}
