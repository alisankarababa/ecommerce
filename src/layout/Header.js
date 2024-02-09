import { NavLink, Link } from "react-router-dom/cjs/react-router-dom";
import Brand from "../components/Brand";
import IconWithText from "../components/IconWithText";
import { useSelector } from "react-redux";
import md5 from "md5";

import HoverMenu from 'material-ui-popup-state/HoverMenu'

import {
  usePopupState,
  bindFocus,
  bindHover,
  bindMenu,
} from 'material-ui-popup-state/hooks'

function CartItem({cartItem}) {

    return (
        <div className="flex gap-[1rem] py-[1rem] font-semibold">
            <div className="flex-[1] aspect-[3/5] border-[1px] border-clr-second rounded-[10px] overflow-hidden">
                <img className="h-full w-full object-cover overflow-hidden" src={cartItem.product.images[0].url} alt="product-img"/>
            </div>
            <div className="flex-[4]">
                <div>
                    <span>{cartItem.product.name}</span> <span className="font-normal">{cartItem.product.description}</span>
                </div>
                <div className="text-clr-second">
                    Adet: {cartItem.count}
                </div>
                <div className="text-clr-primary">
                    ${cartItem.count * cartItem.product.price}
                </div>
            </div>
        </div>
    );
}

function Cart() {

    const cart = useSelector ( store => store.reducerShoppingCart.cart )
    
    const cartPopupState = usePopupState({
        variant: 'popover',
        popupId: 'cart',
    })
    
    return (
        <>
            <IconWithText 
                classIcon="fa-solid fa-cart-shopping" 
                text={" " + cart.length }
                {...bindHover(cartPopupState)}
                {...bindFocus(cartPopupState)}
                variant="contained"
            />
            <HoverMenu
                {...bindMenu(cartPopupState)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <div className="p-[1.5rem] text-clr-dark max-w-[400px] flex flex-col gap-y-[1rem]">
                    <div className="font-semibold">
                        Sepetim ({cart.length} Ürün)
                    </div>

                    {
                        cart.map( cartItem =>
                            <div key={cartItem.product.id} className="border-b-[1px]">
                                <CartItem cartItem={cartItem} />
                            </div>
                        )
                    }

                    <div className="text-[1rem]">
                        <Link to="/shopping_cart" className="btn-small btn-primary-outline mr-[1rem]">Sepete Git</Link>
                        <button className="btn-small btn-primary">Siparişi Tamamla</button>
                    </div>

                </div>
            </HoverMenu>
        </>    
    )

    
}


export default function Header() {

    const loggedInUser = useSelector(store => store.reducerUser.loggedInUser);
    const categories = useSelector( store => store.reducerGlobal.categories );
    const cart = useSelector ( store => store.reducerShoppingCart.cart )

    const popupState = usePopupState({
        variant: 'popover',
        popupId: 'categoryMenu',
    })

    

	return (
		<header className="">

            <div className="text-clr-light bg-bgclr-dark hidden lg:block">
                <nav className="container-big py-[1.5em] px-[1em] flex flex-wrap justify-between items-center gap-[2rem]">
                    <div className="flex items-center gap-[1.875rem]">
                        <IconWithText className="flex items-center gap-[0.3125rem]" classText="text-[0.875rem] font-bold" classIcon="fa-solid fa-phone" text="(225) 555-0118"/>
                        <IconWithText className="flex items-center gap-[0.3125rem]" classText="text-[0.875rem] font-bold" classIcon="fa-regular fa-envelope" text="michelle.rivera@example.com"/>
                    </div>
                    <span className="text-[0.875rem] font-bold">Follow Us and get a chance to win 80% off</span>
                    <span className="flex items-center gap-[1rem]">
                        <span className="text-[0.875rem] font-bold">Follow Us :</span>
						<i className="fa-brands fa-instagram"></i>
						<i className="fa-brands fa-youtube"></i>
                        <i className="fa-brands fa-facebook"></i>
						<i className="fa-brands fa-twitter"></i>
                    </span>
                </nav>
            </div>
			<div className="container-big px-[1em] py-[1.5em]">
				
				<nav className="flex flex-col md:flex-row md:flex-wrap items-center md:justify-between  gap-x-[2rem] gap-y-[2rem]">

                    <div className="mr-0 md:mr-[5rem]">
                        <Brand />
                    </div>
					<ul className="grow-0 lg:grow flex flex-col w-full order-1 md:order-0 sm:w-auto md:flex-row gap-5 text-clr-second">
						<li>
							<NavLink to="/home">Home</NavLink>
						</li>
						<li className="text-clr-dark">
                                <NavLink to="/shop"
                                    variant="contained"
                                    {...bindHover(popupState)}
                                    {...bindFocus(popupState)}
                                >
                                    Shop
                                </NavLink>{" "}
                                <i className="fa-solid fa-chevron-down"></i>
                                <HoverMenu
                                    {...bindMenu(popupState)}
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                                    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                                >
                                    <div className="p-4 flex gap-10">
                                        <div>
                                            <div className="text-clr-dark hover:underline hover:cursor-pointer">
                                                ERKEK
                                            </div>
                                            <div className="flex flex-col text-clr-second">
                                                {
                                                    categories.filter(category => category.gender === "e")
                                                    .map(category => 
                                                        <Link 
                                                            key={category.id} 
                                                            to={`/shop/erkek/${category.title.toLowerCase()}`}
                                                            className="hover:underline hover:cursor-pointer" 
                                                            onClick={popupState.close}>{category.title}
                                                        </Link>
                                                    )
                                                }
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-clr-dark hover:underline hover:cursor-pointer">
                                                KADIN
                                            </div>
                                            <div className="flex flex-col text-clr-second">
                                                {
                                                    categories.filter(category => category.gender === "k")
                                                        .map(category => 
                                                            <Link
                                                                key={category.id} 
                                                                to={`/shop/kadın/${category.title.toLowerCase()}`}
                                                                className="hover:underline hover:cursor-pointer"
                                                                onClick={popupState.close}>{category.title}
                                                            </Link>
                                                        )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </HoverMenu>
						</li>   
						<li>
							<NavLink to="/about">About</NavLink>
						</li>
						<li>
							<NavLink to="#">Blog</NavLink>
						</li>
						<li>
							<NavLink to="/contact">Contact</NavLink>
						</li>
						<li>
							<NavLink to="#">Pages</NavLink>
						</li>
					</ul>
					<ul className="md:ml-auto sm:text-clr-primary flex gap-x-[1.875rem] order-0 md:order-1 items-center">
						<li className="">

                            {
                                loggedInUser ? (
                                    <div className="flex items-center gap-2">
                                        <img className="h-[30px] w-[30px] rounded-full" 
                                            src={"https://secure.gravatar.com/avatar/" + md5(loggedInUser.email.toLowerCase().trim())}
                                            alt="img" />
                                        <span className="text-clr-dark">{loggedInUser.name}</span>
                                    </div>
                                ) : (
                                    <>
                                        <IconWithText classIcon="fa-regular fa-user" text=""/>
                                        <Link to="/login"> Login </Link>
                                        /<Link to="/signup"> Register</Link>
                                    </>
                                )
                            }

						</li>
						<li>
							<i className="fa-solid fa-magnifying-glass"></i>
						</li>
						<li>
                            <Cart />
						</li>
						<li>
                            <IconWithText classIcon="fa-regular fa-heart" text=" 1"/>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
