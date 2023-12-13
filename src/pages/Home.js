import CategoryCard from "../components/CategoryCard";
import ProductCard from '../components/ProductCard';
import FeaturedPost from "../components/FeaturedPost";

import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom"

import men from "../assets/category-card/men.jpeg"
import women from "../assets/category-card/women.jpeg"
import accessory from "../assets/category-card/accessories.jpeg"
import kids from "../assets/category-card/kids.jpeg"

import product from "../assets/product/example-product.jpeg"

import carouselImg from "../assets/carousel-imgs/carousel-img1.jpeg"
import hero2 from "../assets/hero-2/hero-2.png"
import manWoman from "../assets/asian-woman-man-with-winter-clothes 1.png"

import featuredPost1 from "../assets/featured-posts/featured-post1.jpeg"

import { eArrow, getCustomRenderArrowFunction, customRenderIndicatorFunction } from "../utils/Carousel";

export default function Home() {

    return (
        <>
            <section className="container-big">
            <Carousel
                showThumbs={false}
                infiniteLoop={true}
                showStatus={false}
                renderArrowPrev={getCustomRenderArrowFunction(eArrow.prev)}
                renderArrowNext={getCustomRenderArrowFunction(eArrow.next)}
                renderIndicator={customRenderIndicatorFunction}
                >
                <div className="relative aspect-[2/1] text-clr-light">
                    <img className="img-absolute" src={carouselImg} alt="img" />
                    <div className="relative container-small z-10 top-[29%]">
                        <div className="font-bold w-[60%] flex flex-col items-start gap-y-[2.1875rem]">
                            <span>SUMMER 2020</span>
                            <h2 className="text-[3.625rem]">NEW COLLECTION</h2>
                            <span className="text-[1.25rem] text-left font-normal w-[60%]">We know how large objects will act, but things on a small scale.</span>
                            <Link className="btn-md btn-success text-[1.25rem]" to="/shop">SHOP NOW</Link>
                        </div>
                    </div>
                </div>
                <div className="relative aspect-[2/1]">
                    <img className="img-absolute" src={carouselImg} alt="img" />
                </div>
            </Carousel>
            </section>

            <section className="text-center container-small py-[5em]">

                <h2 className="mb-[0.625rem] text-clr-dark text-[1.5rem] font-bold">EDITOR’S PICK</h2>
                <p className="mb-[3rem] text-[0.875rem] text-clr-second">Problems trying to resolve the conflict between </p>
				<div className="flex gap-x-[2rem] aspect-[2/1]">
					<div className="basis-[539px]">
						<CategoryCard
							className="w-full h-full"
							urlImg={men}
							textBtn={"MEN"}
						/>
					</div>
					<div className="basis-[239px]">
						<CategoryCard
							className="w-full h-full"
							urlImg={women}
							textBtn={"WOMEN"}
						/>
					</div>
					<div className="basis-[239px] flex flex-wrap gap-y-[1rem]">
						<CategoryCard
							className="basis-[239px]"
							urlImg={accessory}
							textBtn={"WOMEN"}
						/>
						<CategoryCard
							className="grow basis-[239px]"
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
                renderArrowPrev={getCustomRenderArrowFunction(eArrow.prev)}
                renderArrowNext={getCustomRenderArrowFunction(eArrow.next)}
                renderIndicator={customRenderIndicatorFunction}
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

            <section className="container-medium m-auto">
                <div className="md:grid md:grid-cols-2-9/8 md:gap-[1.875rem]">
                    <div className="md:order-1 flex flex-col justify-center items-start">
                        <div className="font-bold flex flex-col items-center md:items-start gap-y-[2.1875rem]">
                                <span className="text-clr-muted">SUMMER 2020</span>
                                <h2 className="text-[3.625rem] text-clr-dark md:text-left">Part of the Neural Universe</h2>
                                <span className="text-[1.25rem] w-[70%] md:text-left font-normal text-clr-second">We know how large objects will act, but things on a small scale.</span>
                                <div className="flex flex-col items-center md:flex-row md:flex-wrap gap-[0.625rem]">
                                    <Link className="inline-block btn-md text-[0.875rem] btn-success" to="#">BUY NOW</Link>
                                    <Link className="inline-block btn-md text-[0.875rem] btn-success-outline" to="#">READ MORE</Link>
                                </div>
                        </div>
                    </div>
                    <div className="mt-[2rem] md:mt-0">
                        <img className="w-full h-full object-cover" src={manWoman} alt="img"/>
                    </div>
                </div>
            </section>

            <section className="container-small py-[7rem]">
                <span className="block mb-[0.625rem] font-bold text-[0.875rem] text-clr-primary">Practice Advice</span>
                <h2 className="mb-[0.625rem] font-bold text-clr-dark text-[2.5rem]">Featured Posts</h2>
                <p className="max-w-[44%] mx-auto mb-[5rem] text-clr-second text-[0.875rem]">Problems trying to resolve the conflict between <br/>the two major realms of Classical physics: Newtonian mechanics </p>
                <div className="grid grid-cols-autofill-minmax20rem1fr gap-[0.5rem]">
                {
                    Array(3).fill(1).map( ( item, idx ) => <FeaturedPost key={idx} urlImg={featuredPost1}/>)
                }
                </div>
            </section>

        </>
    );
}