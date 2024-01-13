import Clients from "../components/Clients";
import ProductCard from "../components/ProductCard";
import ShopCard from "../components/ShopCard";

import product from "../assets/product/example-product.jpeg"
import Path from "../components/Path";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreatorGlobalFetchCategories } from "../store/actions/actionsGlobal";
import { Link } from "react-router-dom/cjs/react-router-dom";

export default function Shop() {

    const categories = useSelector( store => store.reducerGlobal.categories );

    const dispatch = useDispatch();

    useEffect(() => {
        
        dispatch(actionCreatorGlobalFetchCategories());

    }, [])

    return (
			<>
                <div className="bg-bgclr-ligth-gray-1">
				    <section className="max-w-[1126px] px-[1rem] m-auto pt-[2.375em] pb-[3em]">

					<div className="flex justify-between items-center mb-[3em]">
						<span className="text-[1.5rem] text-clr-dark font-bold">Shop</span>
						<Path />
					</div>

                    <div className="grid grid-cols-autofit-minmax12.875rem1fr gap-[0.9375rem]">
                        {
                            categories.sort( (a, b) => b.rating - a.rating )
                                        .slice(0, 5)
                                        .map(category => 
                                            <Link to={`/shop/${category.gender === "e" ? "erkek" : "kadın"}/${category.title.toLowerCase()}`}>
                                            <ShopCard
                                                className="aspect-[8/9]" 
                                                key={category.id} 
                                                urlImg={category.img} 
                                                text={category.gender === "e" ? "ERKEK" : "KADIN"} 
                                                title={category.title} 
                                            />
                                            </Link>)
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