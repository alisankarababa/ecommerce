import { NavLink } from "react-router-dom/cjs/react-router-dom";
import Brand from "../components/Brand";

export default function Header() {
	return (
		<header className="">

            <div className="text-clr-light bg-bgclr-dark py-[1.5rem]">
                <nav className="container-big flex justify-between items-center">
                    <div className="flex gap-[1.875rem]">
                        <span className="flex items-center gap-[0.3125rem]">
                            <i class="fa-solid fa-phone" />
                            <span className="text-[0.875rem] font-bold">(225) 555-0118</span>
                        </span>
                        <span className="flex items-center gap-[0.3125rem]">
                                <i class="fa-regular fa-envelope" />
                                <span className="text-[0.875rem] font-bold"> michelle.rivera@example.com</span>
                        </span>
                    </div>
                    <span className="text-[0.875rem] font-bold">Follow Us  and get a chance to win 80% off</span>
                    <span className="flex items-center gap-[1rem]">
                        <span className="text-[0.875rem] font-bold">Follow Us :</span>
						<i class="fa-brands fa-instagram"></i>
						<i class="fa-brands fa-youtube"></i>
                        <i class="fa-brands fa-facebook"></i>
						<i class="fa-brands fa-twitter"></i>
                    </span>
                </nav>
            </div>
			<div className="container-big flex py-[1.5em] gap-x-[2.5rem] items-center pt-[0.75rem] pb-[0.5rem]">
				<Brand />
				<nav className="grow flex justify-between">
					<ul className="flex gap-5 text-clr-second">
						<li>
							<NavLink to="#">Home</NavLink>
						</li>
						<li>
							<NavLink to="#" className="text-clr-dark">
								Shop
							</NavLink>
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
						<li>
							<span>
								<i className="fa-regular fa-user"></i> Login
							</span>{" "}
							/ <span>Register</span>
						</li>
						<li>
							<i className="fa-solid fa-magnifying-glass"></i>
						</li>
						<li>
							<i className="fa-solid fa-cart-shopping"></i> 1
						</li>
						<li>
							<i className="fa-regular fa-heart"></i>
							<span> 1</span>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
