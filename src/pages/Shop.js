import Clients from "../components/Clients";
import ProductCard from "../components/ProductCard";
import ShopCard from "../components/ShopCard";

import Path from "../components/Path";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useEffect, useState } from "react";
import { actionCreatorFetchProducts, actionCreatorProductSetActivePage } from "../store/actions/actionsProduct";
import { Pagination } from "@mui/material";

export default function Shop() {

    const categories = useSelector( store => store.reducerGlobal.categories );
    const productList = useSelector( store => store.reducerProduct.productList );
    const pageCount = useSelector( store => store.reducerProduct.pageCount );
    const productPerPage = useSelector( store => store.reducerProduct.productPerPage );
    const activePage = useSelector( store => store.reducerProduct.activePage );
    const areProductsLoading = useSelector( store => store.reducerProduct.areProductsLoading );
    
    
    const [ selectedCategoryId, setSelectedCategoryId ] = useState("");
    const [ selectedDisplayOrder, setSelectedDisplayOrder ] = useState("");
    const [ filterText, setFilterText ] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        setSelectedCategoryId("");
        setSelectedDisplayOrder("");
        setFilterText("");
        dispatch(actionCreatorFetchProducts("", "", "", activePage * productPerPage ));

    }, [activePage, productPerPage, dispatch])

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
				    <section className="container-small my-[3rem] py-[5rem] ">
				    	<div className="text-clr-second flex flex-wrap items-center justify-between gap-x-[4rem] gap-y-[2rem] py-[1.5em] text-[0.875rem]">
                            <div className="text-[0.875rem] font-bold text-start mt-[1rem]">
				    			{productList.length} sonuç gösteriliyor
				    		</div>
                            <div className="flex flex-wrap items-center gap-x-[1rem]">
                                <label className="text-[1rem]">
                                    Arama:{" "}
                                    <input className="p-[.5em] text-[0.875rem] border-[1px] rounded-[5px]" type="text" onChange={e => setFilterText(e.target.value)} />
                                </label>
                                <select
                                    onChange={e => setSelectedDisplayOrder(e.target.value)}
				    				className="p-[.5em] border-[1px] rounded-[5px] bg-[#F9F9F9]"
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
                                    className="p-[.5em] border-[1px] rounded-[5px] bg-[#F9F9F9]"
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
				    				Filtrele
				    			</button>
                            </div>
				    	</div>

				    	{
                            areProductsLoading ? 
                            ( 
                                <div className="flex justify-center items-center">
						            <div className="w-[50px] h-[50px] rounded-full animate-spin border-2 border-solid border-clr-primary border-t-transparent"></div>
						        </div>
                            ) :
                            (
                                <>
                                <div className="my-[5rem] grid grid-cols-autofill-minmax14.75rem1fr gap-x-[1.875rem] gap-y-[5rem]">
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
                                        })
                                    }
                                </div>
                                <div className="flex justify-center">
                                    <Pagination 
                                        count={pageCount}
                                        page={activePage + 1}
                                        onChange={(e, v) => dispatch(actionCreatorProductSetActivePage(v - 1))}
                                        showFirstButton
                                        showLastButton
                                        color="primary"
                                        variant="outlined"
                                        shape="rounded"
                                    />
                                </div>
                                </>
                            )
                        }
				    </section>
                </div>
				<Clients />
			</>
		);
}