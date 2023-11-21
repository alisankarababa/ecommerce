import { NavLink } from "react-router-dom/cjs/react-router-dom";
import Brand from "./Brand";



export default function Header() {
	return (
		<header className="flex py-[1.5em] gap-x-[2.5rem] items-center">
            <Brand />
			<div className="grow flex justify-between">
                <ul className="flex gap-5 text-clr-second">
					<li>
						<NavLink to="#">Home</NavLink>
					</li>
					<li>
						<NavLink to="#" className="text-clr-dark">Shop</NavLink>
					</li>
					<li>
						<NavLink to="#">About</NavLink>
					</li>
					<li>
						<NavLink to="#">Blog</NavLink>
					</li>
					<li>
						<NavLink to="#">Contact</NavLink>
					</li>
					<li>
						<NavLink to="#">Pages</NavLink>
					</li>
				</ul>
				<ul className="text-clr-primary flex gap-x-[1.875rem]">
					<li><span><i className="fa-regular fa-user"></i> Login</span> / <span>Register</span></li>
					<li>
						<i className="fa-solid fa-magnifying-glass"></i>
					</li>
					<li>
						<i className="fa-solid fa-cart-shopping"></i>1
					</li>
					<li>
						<i className="fa-regular fa-heart"></i>
						<span>1</span>
					</li>
				</ul>
			</div>
		</header>
	);
}
