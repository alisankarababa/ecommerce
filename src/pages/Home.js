import CategoryCard from "../components/CategoryCard";
import ProductCard from '../components/ProductCard';
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom"

import men from "../assets/category-card/men.jpeg"
import women from "../assets/category-card/women.jpeg"
import accessory from "../assets/category-card/accessories.jpeg"
import kids from "../assets/category-card/kids.jpeg"

import product from "../assets/product/example-product.jpeg"

import carouselImg from "../assets/carousel-imgs/carousel-img1.jpeg"
import hero2 from "../assets/hero-2/hero-2.png"


export default function Home() {

    return (
        <>
            <section> 
            <Carousel 
                showThumbs={false}
                infiniteLoop={true}
                renderIndicator={(onClickHandler, isSelected, index, label) => {
                    const defStyle = { backgroundColor: "white", opacity: "50%", cursor: "pointer", width: "50px", height: "10px", display: "inline-block" };
                    const style = isSelected
                      ? { ...defStyle, opacity: "100%" }
                      : { ...defStyle };
                    return (
                      <span
                        style={style}
                        onClick={onClickHandler}
                        value={index}
                        key={index}
                        role="button"
                        tabIndex={0}
                        aria-label={`${label} ${index + 1}`}
                      >
                      </span>
                    );
                  }}
                >
                <div>
                        <img src={carouselImg} alt="img" />
                </div>
                <div>
                        <img src={carouselImg} alt="img" />
                </div>
            </Carousel>
            </section>

            <section className="container-small">
				<div className="flex gap-x-[2rem] aspect-[2/1]">
					<div className="grow-[2] basis-0">
						<CategoryCard
							className="w-full h-full"
							urlImg={men}
							textBtn={"MEN"}
						/>
					</div>
					<div className="grow-[1] basis-0">
						<CategoryCard
							className="w-full h-full"
							urlImg={women}
							textBtn={"WOMEN"}
						/>
					</div>
					<div className="grow-[1] basis-0 flex flex-col gap-y-[1rem]">
						<CategoryCard
							className="grow basis-0"
							urlImg={accessory}
							textBtn={"WOMEN"}
						/>
						<CategoryCard
							className="grow basis-0"
							urlImg={kids}
							textBtn={"KIDS"}
						/>
					</div>
				</div>
			</section>

            <section className="container-small">

                <h2 className="text-clr-second text-[1.25rem] mb-[0.625rem]">Featured Products</h2>
                <h3 className="text-clr-dark font-bold text-[1.5rem] mb-[0.625rem]">BESTSELLER PRODUCTS</h3>
                <p className="text-clr-second">Problems trying to resolve the conflict between </p>

                <div className="py-[5rem] flex flex-wrap gap-y-[5rem] gap-x-[1.875rem]  justify-start">
				{Array(8).fill(1).map((item, idx) => {
					return <ProductCard key={idx} className="basis-[240px]" urlImg={product} />;
				})}
                </div>
			</section>

            <section className="container-big">
            <Carousel
                showThumbs={false}
                infiniteLoop={true}
                showStatus={false}
                renderIndicator={(onClickHandler, isSelected, index, label) => {
                    const defStyle = { backgroundColor: "white", opacity: "50%", cursor: "pointer", width: "50px", height: "10px", display: "inline-block" };
                    const style = isSelected
                      ? { ...defStyle, opacity: "100%" }
                      : { ...defStyle };
                    return (
                      <span
                        style={style}
                        onClick={onClickHandler}
                        value={index}
                        key={index}
                        role="button"
                        tabIndex={0}
                        aria-label={`${label} ${index + 1}`}
                      >
                      </span>
                    );
                  }}
                >
                <div className="container-big bg-bgclr-secondary-1 text-clr-light aspect-[2/1] flex items-end">
                    <div className="container-small max-h-[85%] flex flex-wrap justify-between gap-[1.875rem]">
                        <div className="basis-[510px] grow pt-[3.75em] font-bold flex flex-col items-start gap-y-[1.875rem]">
                            <span>SUMMER 2020</span>
                            <h2 className="text-[3.625rem] text-left w-[70%]">Vita Classic Product</h2>
                            <span className="text-[0.875rem] w-[67%] text-left font-normal">We know how large objects will act, We know how are objects will act, We know</span>
                            <div>
                                <span className="text-[1.5rem] mr-[2.125rem]" >$16.48</span>
                                <Link className="btn-md btn-success inline-block text-[0.875rem]" to="#">ADD TO CART</Link>
                            </div>
                        </div>
                        <div className="basis-[510px] grow px-[2.1rem] relative">
                            <img className="w-full h-full object-cover object-top" src={hero2} alt="img" />
                        </div>
                    </div>
                </div>
                <div className="bg-bgclr-secondary-1 text-clr-light aspect-[2/1] flex">
                    <div className="grow pt-[7rem] container-small flex justify-between gap-[1.875rem]">
                        <div className="basis-[510px] grow shrink font-bold flex flex-col items-start gap-y-[2.1875rem]">
                            <span>SUMMER 2020</span>
                            <h2 className="text-[3.625rem] text-left">Vita Classic Product</h2>
                            <span className="text-[1.25rem] w-[70%] text-left font-normal">We know how large objects will act, but things on a small scale.</span>
                            <div>
                                <span className="text-[1.5rem] mr-[2.125rem]" >$16.48</span>
                                <Link className="btn-md bg-bgclr-success rounded-[5px]" to="#">ADD TO CART</Link>
                            </div>
                        </div>
                        <div className="basis-[510px] grow shrink">
                            <img src={hero2} alt="img" />
                        </div>
                    </div>
                </div>
                </Carousel>
            </section>
        </>
    );
}