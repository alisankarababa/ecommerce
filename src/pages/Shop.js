import Clients from "../components/Clients";
import ProductCard from "../components/ProductCard";
import ShopCard from "../components/ShopCard";

import Path from "../components/Path";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useEffect, useState } from "react";
import { actionCreatorFetchProducts } from "../store/actions/actionsProduct";

export default function Shop() {

    const categories = useSelector( store => store.reducerGlobal.categories );
    const productList = useSelector( store => store.reducerProduct.productList );
    const [ selectedCategoryId, setSelectedCategoryId ] = useState("");
    const [ selectedDisplayOrder, setSelectedDisplayOrder ] = useState("");
    const [ filterText, setFilterText ] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        
        dispatch(actionCreatorFetchProducts());
    }, [])

    function onClickFilter() {

        dispatch(actionCreatorFetchProducts(selectedCategoryId, selectedDisplayOrder, filterText));
    }

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
				    	<div className="text-clr-second flex flex-col gap-y-[1.5rem] md:flex-row items-center md:justify-between py-[1.5em] text-[0.875rem]">
				    		<div className="text-[0.875rem] font-bold">
				    			{productList.length} sonuç gösteriliyor
				    		</div>
				    		{/* <div className="flex items-center gap-x-[1rem]">
				    			<span className="text-[0.875rem] font-bold">Views:</span>
				    			<i className="p-[1rem] rounded-[5px] border-[1px] border-clr-light-gray-2 text-clr-dark fa-solid fa-border-all"></i>
				    			<i className="p-[1rem] rounded-[5px] border-[1px] border-clr-light-gray-2 text-clr-dark fa-solid fa-list-ul"></i>
				    		</div> */}
				    		<div className="flex items-center gap-[.75rem]">
                            <label className="text-[1rem]">
                                Arama:{" "}
                                <input className="p-[.5em] text-[0.875rem] border-[1px] rounded-[5px]" type="text" onChange={e => setFilterText(e.target.value)} />
                            </label>
                            <select
                                    onChange={e => setSelectedDisplayOrder(e.target.value)}
				    				className="mr-[1rem] pr-[1em] pl-[.5em] py-[.5em]  border-r-[.5em] border-r-transparent rounded-[5px] bg-[#F9F9F9]"
				    				name="categories"
				    				id="category_select"
				    			>
                                    <option value="">Sıralama Ölçütü</option>
                                    <option value="price:asc">Fiyat: Düşükten Yükseğe</option>
                                    <option value="price:desc">Fiyat: Yüksekten Düşüğe</option>
                                    <option value="rating:asc">Puan: Düşükten Yükseğe</option>
                                    <option value="rating:desc">Puan: Yüksekten Düşüğe</option>
				    			</select>
				    			<select
                                    onChange={e => setSelectedCategoryId(e.target.value)}
				    				className="mr-[1rem] pr-[1em] pl-[.5em] py-[.5em] border-r-[.5em] border-r-transparent rounded-[5px] bg-[#F9F9F9]"
				    				name="categories"
				    				id="category_select"
				    			> 
                                    <option value="">Bir kategori seçiniz</option>
                                {
                                    categories.map( category => {

                                        return (
                                            <option
                                                key={category.id}
                                                value={category.id}
                                            >
                                            {`${category.gender === "e" ? "Erkek" : "Kadın"} ${category.title}`}
                                            </option>
                                        )
                                    })
                                }
				    			</select>
				    			<button
                                    className="font-bold btn-small btn-primary"
                                    onClick={onClickFilter}
                                >
				    				Filter
				    			</button>
				    		</div>
				    	</div>
				    	<div className="my-[3rem] py-[5rem] grid grid-cols-autofill-minmax14.75rem1fr gap-x-[1.875rem] gap-y-[5rem]">
				    		{
                            productList
				    			.map((product, idx) => {
				    				return (
				    					<ProductCard
				    						key={product.id}
                                            productName={product.name}
                                            price={product.price}
                                            description={product.description}
                                            rating={product.rating}
				    						urlImg={product.images[0].url}
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