import Clients from "../components/Clients";
import ShopCard from "../components/ShopCard";
import imgShopCard1 from "../assets/Shop/shopCard1.jpeg";

export default function Shop() {

    return (
			<>
                <div className="bg-bgclr-ligth-gray-1">
				    <section className="container-big m-auto pt-[2.375em] pb-[3em] px-[11em]">

					<div className="flex justify-between items-center mb-[3em]">
						<span className="text-[1.5rem] text-clr-dark font-bold">Shop</span>
						<div className="flex items-center gap-x-[1rem]">
							<span className="text-clr-dark text-[0.875rem] font-bold">Home</span>
							<i className="text-clr-muted fa-solid fa-chevron-right"></i>
							<span className="text-[0.875rem] text-clr-muted font-bold">Shop</span>
						</div>
					</div>

                    <div className="flex justify-between gap-x-[1rem]">
                        {
                            Array(5).fill(1).map((item, idx) => <ShopCard className="basis-[206px] grow aspect-[8/9]" key={idx} urlImg={imgShopCard1} title="CLOTHS" text="5 Items" />)
                        }
                    </div>

				    </section>
                </div>

				    </section>
                </div>
				<Clients />
			</>
}