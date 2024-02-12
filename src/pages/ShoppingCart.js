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

import { useEffect, useState } from "react";

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
								sx={{ display: { sm: "none", md: "table-cell" }, flex: "5" }}
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

function OrderSummaryBox() {

	const cart = useSelector((store) => store.reducerShoppingCart.cart);
    const [ productCost, setProductCost ] = useState(0);
    const [ freeDelivery, setFreeDelivery ] = useState(false);
    const [ totalCost, setTotalCost ] = useState(0);
    

    const freeDeliveryLimit = 150;
    const shippingCost = 29.99;


    useEffect(() => {

        const localTotalPrice = cart.reduce( ( acc, cartItem ) => {

            if(cartItem.checked)
                return acc + cartItem.product.price * cartItem.count;

            return acc;
        } , 0)

        setProductCost(localTotalPrice);

        const localIsFreeDelivery = localTotalPrice > freeDeliveryLimit ? true : false;

        setFreeDelivery( localIsFreeDelivery );

        setTotalCost( localIsFreeDelivery ? localTotalPrice : localTotalPrice + shippingCost );

    }, [cart, setProductCost])


    return (
        <div className="p-[1rem] border-[1px] rounded-[5px] border-clr-second text-left text-clr-dark">
            <h5 className="mb-[1rem] font-medium">Sipariş Özeti</h5>
            <div className="grid grid-cols-2 gap-[1.125rem] text-[0.875rem]">
                <span>Ürün Toplamı</span>
                <span className="text-right font-semibold">{productCost.toFixed(2)} TL</span>
                <span>Kargo Toplamı</span>
                <span className="text-right font-semibold">{shippingCost} TL</span>
                <span>{freeDeliveryLimit} TL ve Üzeri Kargo Bedava (Satıcı Karşılar)</span>
                <span className="text-right font-semibold">{freeDelivery ? -shippingCost.toFixed(2) : 0.00} TL</span>
            </div>
            <hr className="border-t-[1px] border-clr-second my-[1rem]"/>
            <div className="grid grid-cols-2 gap-[1.125rem] text-[0.875rem]">
                <span>Toplam</span>
                <span className="text-right font-semibold text-clr-primary">{totalCost.toFixed(2)} TL</span>
            </div>
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
			<div className="flex">
				<div className="flex-[4]">
					<CartTable />
				</div>
				<div className="flex-[1]">
					<OrderSummaryBox />
				</div>
			</div>
		</div>
	);
}
