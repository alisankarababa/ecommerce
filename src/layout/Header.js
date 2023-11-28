import { NavLink } from "react-router-dom/cjs/react-router-dom";
import Brand from "../components/Brand";
import IconWithText from "../components/IconWithText";

export default function Header() {
	return (
		<header className="">

            <div className="text-clr-light bg-bgclr-dark">
                <nav className="container-big py-[1.5em] px-[1em] flex justify-between items-center">
                    <div className="flex gap-[1.875rem]">
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
			<div className="container-big px-[1em] py-[1.5em] flex gap-x-[2.5rem] items-center">
				<Brand />
				<nav className="grow flex justify-between">
					<ul className="flex gap-5 text-clr-second">
						<li>
							<NavLink to="/home">Home</NavLink>
						</li>
						<li className="text-clr-dark">
							<NavLink to="/shop">
								Shop
							</NavLink> {" "}
                            <i className="fa-solid fa-chevron-down"></i>
						</li>
						<li>
							<NavLink to="/about">About</NavLink>
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
						<li>
                            <IconWithText classIcon="fa-regular fa-user" text=" Login "/>
							/ <span>Register</span>
						</li>
						<li>
							<i className="fa-solid fa-magnifying-glass"></i>
						</li>
						<li>
                            <IconWithText classIcon="fa-solid fa-cart-shopping" text=" 1"/>
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
