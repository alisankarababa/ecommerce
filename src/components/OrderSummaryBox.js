import { useState, useEffect } from "react";
import { useSelector } from "react-redux";


export default function OrderSummaryBox() {

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