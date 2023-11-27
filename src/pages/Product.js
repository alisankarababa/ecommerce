import Clients from "../components/Clients";
import Path from "../components/Path";
import ProductCard from "../components/ProductCard";
import ShopCard from "../components/ShopCard";

import product from "../assets/product/example-product.jpeg"
import imgShopCard1 from "../assets/Shop/shopCard1.jpeg";

export default function Product() {



    return (
			<>
                <div className="bg-bgclr-ligth-gray-1">
                    <div className="container-big px-[1rem] py-[1.5rem]">
                        <Path />
                    </div>
                </div>


				<Clients />
			</>
		);
}