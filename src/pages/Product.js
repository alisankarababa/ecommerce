import Clients from "../components/Clients";
import Path from "../components/Path";
import ProductNavBar from "../components/product-page/ProductNavBar";
import SectionMid from "../components/product-page/SectionMid";
import SectionProductBestSeller from "../components/product-page/SectionProductBestSeller";
import ProductCarouselWithDetails from "../components/product-page/ProductCarouselWithDetails";
import { useParams } from "react-router-dom/cjs/react-router-dom";


export default function Product() {

    const { product_id } = useParams();

	return (
		<>
			<div className="bg-bgclr-ligth-gray-1">
				<div className="container-big px-[1rem] py-[1.5rem]">
					<Path />
				</div>
			</div>

			<ProductCarouselWithDetails productId={product_id}/>
			<ProductNavBar />
			<SectionMid />
			<SectionProductBestSeller />
			<Clients />
		</>
	);
}
