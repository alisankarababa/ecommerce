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
	actionCreatorShoppingCartToggleCheck,
} from "../store/actions/actionsShoppingCart";

import { Link } from "react-router-dom/cjs/react-router-dom.min";

import OrderSummaryBox from "../components/OrderSummaryBox";

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

function CartTable() {
	const dispatch = useDispatch();
	const cart = useSelector((store) => store.reducerShoppingCart.cart);

	return (
		<TableContainer>
			<Table>
				<TableBody>
					{cart.map((cartItem) => (
						<TableRow
							key={cartItem.product.id}
							className="h-[150px] p-[1rem]"
							sx={{
								"&:last-child td, &:last-child th": { border: 0 },
								display: "flex",
							}}
						>
							<TableCell component="th" scope="row" sx={{ flex: "0.2" }}>
								<div className="h-full flex justify-center items-center">
									<input
										type="checkbox"
										name="myCheckbox"
										checked={cartItem.checked}
										onChange={() =>
											dispatch(
												actionCreatorShoppingCartToggleCheck(
													cartItem.product.id
												)
											)
										}
									/>
								</div>
							</TableCell>
							<TableCell sx={{ flex: "1" }} component="th" scope="row">
								<div className="m-auto h-full aspect-[2/3]">
									<img
										className="w-full h-full object-cover"
										src={cartItem.product.images[0].url}
										alt="product_img"
									/>
								</div>
							</TableCell>
							<TableCell
								sx={{ display: {xs:"none", sm: "none", md: "table-cell" }, flex: "5" }}
								component="th"
								scope="row"
							>
								<div className="h-full flex items-center">
									<div>
										<span className="text-clr-dark font-semibold">
											{cartItem.product.name}
										</span>{" "}
										<span>{cartItem.product.description}</span>
									</div>
								</div>
							</TableCell>
							<TableCell sx={{ flex: "1" }}>
								<div className="h-full flex justify-end items-center">
									<span className="text-clr-primary font-semibold">
										{(cartItem.product.price * cartItem.count).toFixed(2)} TL
									</span>
								</div>
							</TableCell>
							<TableCell sx={{ flex: "1" }}>
								<div className="h-full flex justify-center items-center">
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
								</div>
							</TableCell>
							<TableCell align="center" sx={{ flex: "0.4" }}>
								<div className="h-full flex justify-center items-center">
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
								</div>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

export default function ShoppingCart() {
	const cart = useSelector((store) => store.reducerShoppingCart.cart);

	return (
		<div className="container-big py-[2.5rem]">
			<p className="text-left mb-[1.25rem] font-semibold">
				Sepetim ({cart.length} Ürün)
			</p>
			<div className="flex flex-wrap">
				<div className="flex-[4] basis-[400px]">
					<CartTable />
				</div>
				<div className="flex-[1] basis-[200px] flex flex-col gap-y-[1rem] text-center">
                    <Link to="/order" className="btn btn-primary w-full py-2 rounded-[5px]">Sepeti Onayla <span className="align-middle">{">"}</span></Link>
					<OrderSummaryBox />
                    <Link to="/order" className="btn btn-primary w-full py-2 rounded-[5px]">Sepeti Onayla <span className="align-middle">{">"}</span></Link>
				</div>
			</div>
		</div>
	);
}
