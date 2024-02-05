import Clients from "../components/Clients";
import ProductCard from "../components/ProductCard";
import ShopCard from "../components/ShopCard";

import Path from "../components/Path";
import { useDispatch, useSelector } from "react-redux";
import {
	Link,
	useHistory,
	useLocation,
	useParams,
} from "react-router-dom/cjs/react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
	actionCreatorFetchProducts,
	actionCreatorProductSetActivePage,
	actionCreatorProductSetQueryParameters,
	actionCreatorProductSetQueryParametersToDefault,
} from "../store/actions/actionsProduct";
import { Pagination } from "@mui/material";

function SearchBar(props) {
	const categories = useSelector((store) => store.reducerGlobal.categories);
    const queryParams = useSelector((store) => store.reducerProduct.queryParams);
    const history = useHistory();
    
    const [ filter, setFilter ] = useState(queryParams.filter);
    const [ sort, setSort ] = useState(queryParams.sort);
    const [ categoryId, setCategoryId ] = useState(queryParams.category);

    useEffect(() => {

        setFilter(queryParams.filter);
        setSort(queryParams.sort);
        setCategoryId(queryParams.category);
    }, [queryParams])
    
    function onClickFilter() {

        let url = "/shop";

        if(categoryId) {
            
            const foundCategory = categories.find((category) => {
                return category.id === categoryId;
            })
            url += "/" + (foundCategory.gender === "e" ? "erkek" : "kadın");
            url += "/" + foundCategory.title.toLowerCase();
        }

        const obj = {
            filter,
            sort
        }

        for(const key in obj) {
            if(!obj[key])
                delete obj[key];
        }
        
        if(Object.keys(obj).length > 0) {
            const searchParams = new URLSearchParams(obj);
            url += "?" + searchParams.toString();
        }

        history.push(url);
	}

	return (
		<div className="flex flex-wrap items-center gap-x-[1rem]">
			<label className="text-[1rem]">
				Arama:{" "}
				<input
					value={filter}
					className="p-[.5em] text-[0.875rem] border-[1px] rounded-[5px]"
					type="text"
    				onChange={(e) => setFilter(e.target.value)}
				/>
			</label>
			<select
				onChange={(e) => setSort(e.target.value)}
				className="p-[.5em] border-[1px] rounded-[5px] bg-[#F9F9F9]"
				name="categories"
				id="category_select"
			>
				<option selected={sort === ""} value="">
					Sıralama Ölçütü
				</option>
				<option selected={sort === "price:asc"} value="price:asc">
					Fiyat: Düşükten Yükseğe
				</option>
				<option selected={sort === "price:desc"} value="price:desc">
					Fiyat: Yüksekten Düşüğe
				</option>
				<option selected={sort === "rating:asc"} value="rating:asc">
					Puan: Düşükten Yükseğe
				</option>
				<option
					selected={sort === "rating:desc"}
					value="rating:desc"
				>
					Puan: Yüksekten Düşüğe
				</option>
			</select>
			<select
				onChange={(e) => setCategoryId(Number(e.target.value))}
				className="p-[.5em] border-[1px] rounded-[5px] bg-[#F9F9F9]"
				name="categories"
				id="category_select"
				selected={categoryId === 0}
			>
				<option value={0}>Bir kategori seçiniz</option>
				{categories.map((category) => {
					return (
						<option
							key={category.id}
							value={category.id}
							selected={categoryId === category.id}
						>
							{`${category.gender === "e" ? "Erkek" : "Kadın"} ${
								category.title
							}`}
						</option>
					);
				})}
			</select>
			<button
				className="font-bold btn-small btn-primary"
				onClick={onClickFilter}
			>
				Filtrele
			</button>
		</div>
	);
}

function ShopPagination() {
	const activePage = useSelector((store) => store.reducerProduct.activePage);
	const pageCount = useSelector((store) => store.reducerProduct.pageCount);
	const dispatch = useDispatch();

	return (
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
	);
}

function ProductDisplay(props) {

	const productList = useSelector((store) => store.reducerProduct.productList);
	const categories = useSelector((store) => store.reducerGlobal.categories);

	return (
		<div className="my-[5rem] grid grid-cols-autofill-minmax14.75rem1fr gap-x-[1.875rem] gap-y-[5rem]">
			{productList.map((product, idx) => {

                const foundCategory = categories.find((category) => category.id === product.category_id);
                if(!foundCategory)
                    return null; //TODO null??

                


				return (
                    <Link key={product.id} to={`/shop/${foundCategory.gender === "e" ? "erkek" : "kadın"}/${foundCategory.title.toLowerCase()}/${product.id}/${product.name}`}>
					    <ProductCard
					    	productName={product.name}
					    	price={product.price}
					    	description={product.description}
					    	rating={product.rating}
					    	urlImg={product.images[0].url}
					    />
                    </Link>
				);
			})}
		</div>
	);
}

export default function Shop() {

	const { gender: paramGender, category_title: paramCategoryTitle } = useParams();
    const isFirstMount = useRef(true);
    const url = useLocation();

	const categories = useSelector((store) => store.reducerGlobal.categories);
	const productList = useSelector((store) => store.reducerProduct.productList);

	const areProductsLoading = useSelector((store) => store.reducerProduct.areProductsLoading);

	const queryParams = useSelector((store) => store.reducerProduct.queryParams);

	const dispatch = useDispatch();

    useEffect(() => {

        const obj = {};

        if(paramGender && paramCategoryTitle) {
            const foundCategory = categories.find((category) => {
                return category.gender === paramGender.slice(0,1) &&
                    category.title.toLowerCase() === paramCategoryTitle
            })
            
            if(foundCategory) {
                obj.category = foundCategory.id;
            }
        } else {
            obj.category = 0;
        }
        
        const query = new URLSearchParams(url.search);

        for (const [key, value] of query.entries()) {
            obj[key] = value;
        }

        if(!obj.filter)
            obj.filter = "";

        if(!obj.sort)
            obj.sort = "";

        const newQueryParams = { ...queryParams };
        newQueryParams.offset = 0;
        
        for(const key in obj) {
            newQueryParams[key] = obj[key];
        }

        if(categories.length > 0)
            dispatch(actionCreatorProductSetQueryParameters(newQueryParams));
        
    }, [paramGender, paramCategoryTitle, url, categories, dispatch])

    
    useEffect(() => {
        
        if(isFirstMount.current) {
            isFirstMount.current = false;
        } else {
            dispatch(actionCreatorFetchProducts(queryParams));
        }

    }, [dispatch, queryParams])

    useEffect(() => {
        
        return (() => {
            dispatch(actionCreatorProductSetQueryParametersToDefault())
        })

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
						{categories
							.sort((a, b) => b.rating - a.rating)
							.slice(0, 5)
							.map((category) => (
								<Link
									to={`/shop/${
										category.gender === "e" ? "erkek" : "kadın"
									}/${category.title.toLowerCase()}`}
								>
									<ShopCard
										className="aspect-[8/9]"
										key={category.id}
										urlImg={category.img}
										text={category.gender === "e" ? "ERKEK" : "KADIN"}
										title={category.title}
									/>
								</Link>
							))}
					</div>
				</section>
			</div>

			<div>
				<section className="container-small my-[3rem] py-[5rem] ">
					<div className="text-clr-second flex flex-wrap items-center justify-between gap-x-[4rem] gap-y-[2rem] py-[1.5em] text-[0.875rem]">
						<div className="text-[0.875rem] font-bold text-start mt-[1rem]">
							{productList.length} sonuç gösteriliyor
						</div>
						<SearchBar />
					</div>

					{areProductsLoading ? (
						<div className="flex justify-center items-center">
							<div className="w-[50px] h-[50px] rounded-full animate-spin border-2 border-solid border-clr-primary border-t-transparent"></div>
						</div>
					) : (
						<>
							<ProductDisplay />
							<ShopPagination />
						</>
					)}
				</section>
			</div>
			<Clients />
		</>
	);
}
