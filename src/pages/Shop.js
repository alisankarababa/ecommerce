import Clients from "../components/Clients";
import ProductCard from "../components/ProductCard";
import ShopCard from "../components/ShopCard";

import product from "../assets/product/example-product.jpeg"
import imgShopCard1 from "../assets/Shop/shopCard1.jpeg";
import Path from "../components/Path";

export default function Shop() {

    return (
			<>
                <div className="bg-bgclr-ligth-gray-1">
				    <section className="container-big m-auto pt-[2.375em] pb-[3em] px-[11em]">

					<div className="flex justify-between items-center mb-[3em]">
						<span className="text-[1.5rem] text-clr-dark font-bold">Shop</span>
						<Path />
					</div>

                    <div className="flex justify-between gap-x-[1rem]">
                        {
                            Array(5).fill(1).map((item, idx) => <ShopCard className="basis-[206px] grow aspect-[8/9]" key={idx} urlImg={imgShopCard1} title="CLOTHS" text="5 Items" />)
                        }
                    </div>

				    </section>
                </div>

                <div>
				    <section className="container-small">
				    	<div className="text-clr-second flex flex-col gap-y-[1.5rem] md:flex-row items-center md:justify-between py-[1.5em]">
				    		<div className="text-[0.875rem] font-bold">
				    			Showing all 12 results
				    		</div>
				    		<div className="flex items-center gap-x-[1rem]">
				    			<span className="text-[0.875rem] font-bold">Views:</span>
				    			<i className="p-[1rem] rounded-[5px] border-[1px] border-clr-light-gray-2 text-clr-dark fa-solid fa-border-all"></i>
				    			<i className="p-[1rem] rounded-[5px] border-[1px] border-clr-light-gray-2 text-clr-dark fa-solid fa-list-ul"></i>
				    		</div>
				    		<div className="flex">
				    			<select
				    				className="mr-[1rem] pr-[2em] pl-[1.3em] text-[0.875rem] border-[1px] rounded-[5px] border-[#DDDDDD] bg-[#F9F9F9]"
				    				name="cars"
				    				id="cars"
				    			>
				    				<option value="Popularity">Popularity</option>
				    			</select>
				    			<button className="font-bold btn-small btn-primary text-[0.875rem]">
				    				Filter
				    			</button>
				    		</div>
				    	</div>
				    	<div className="my-[3rem] py-[5rem] grid grid-cols-autofill-minmax14.75rem1fr gap-x-[1.875rem] gap-y-[5rem]">
				    		{Array(12)
				    			.fill(1)
				    			.map((item, idx) => {
				    				return (
				    					<ProductCard
				    						key={idx}
				    						className="basis-[200px]"
				    						urlImg={product}
				    					/>
				    				);
				    			})}
				    	</div>
				    </section>
                </div>
				<Clients />
			</>
		);
}