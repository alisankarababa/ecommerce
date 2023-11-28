import Clients from "../components/Clients";
import Path from "../components/Path";
import ProductNavBar from "../components/product-page/ProductNavBar";
import SectionMid from "../components/product-page/SectionMid";
import SectionProductBestSeller from "../components/product-page/SectionProductBestSeller";


export default function Product() {
	return (
		<>
			<div className="bg-bgclr-ligth-gray-1">
				<div className="container-big px-[1rem] py-[1.5rem]">
					<Path />
				</div>
			</div>

			<ProductNavBar />
			<SectionMid />
			<SectionProductBestSeller />
			<Clients />
		</>
	);
}
