import Clients from "../components/Clients";
import Path from "../components/Path";
import SectionProductBestSeller from "../components/product-page/SectionProductBestSeller";


export default function Product() {
	return (
		<>

            <ProductNavBar />
			<SectionMid />
			<SectionProductBestSeller />
			<Clients />
		</>
	);
}
