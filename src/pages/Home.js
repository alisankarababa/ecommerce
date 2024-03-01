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
                <div className="grid grid-cols-1 grid-rows-[45rem] text-clr-light">
                    <img className="h-full row-span-full col-span-full object-cover object-center" src={carouselImg} alt="img" />
                    <div className="row-span-full col-span-full flex items-center container-small w-full">
                        <div className="font-bold flex flex-col items-center text-center xs:text-left xs:items-start gap-y-[2.1875rem]">
                            <span>SUMMER 2020</span>
                            <h2 className="text-[2.5rem] xs:text-[3.625rem]">NEW COLLECTION</h2>
                            <span className="text-[1.25rem] font-normal max-w-[25rem]">We know how large objects will act, but things on a small scale.</span>
                            <Link className="btn-md btn-success text-[1.25rem]" to="/shop">SHOP NOW</Link>
                        </div>
                    </div>
                </div>
                <div className="relative h-[45rem] text-clr-light">
                    <img className="h-full object-cover object-center" src={carouselImg} alt="img" />
                </div>
                
            </Carousel>
            </section>

            <section className="text-center container-small py-[5em]">

                <h2 className="mb-[0.625rem] text-clr-dark text-[1.5rem] font-bold">EDITOR’S PICK</h2>
                <p className="mb-[3rem] text-[0.875rem] text-clr-second">Problems trying to resolve the conflict between </p>
				<div className="flex flex-wrap gap-[1.825rem]">
					<div className="basis-[26rem] grow h-[31.25rem]">
						<CategoryCard
							className="w-full h-full"
							urlImg={men}
							textBtn={"MEN"}
						/>
					</div>
                    <div className="basis-[26rem] grow flex flex-wrap gap-[1.825rem]">
					    <div className="basis-[12rem] grow h-[31.25rem]">
					    	<CategoryCard
					    		className="w-full h-full"
					    		urlImg={women}
					    		textBtn={"WOMEN"}
					    	/>
					    </div>
					    <div className="basis-[12rem] grow flex flex-col gap-y-[1rem] h-[31.25rem]">
					    	<CategoryCard
					    		className="w-full h-[15rem]"
					    		urlImg={accessory}
					    		textBtn={"ACCESSORIES"}
					    	/>
					    	<CategoryCard
					    		className="w-full h-[15rem]"
					    		urlImg={kids}
					    		textBtn={"KIDS"}
					    	/>
					    </div>
                    </div>
				</div>
			</section>

            {/* <section className="container-small text-center">

                <h2 className="text-clr-second text-[1.25rem] mb-[0.625rem]">Featured Products</h2>
                <h3 className="text-clr-dark font-bold text-[1.5rem] mb-[0.625rem]">BESTSELLER PRODUCTS</h3>
                <p className="text-clr-second">Problems trying to resolve the conflict between </p>

                <div className="py-[5rem] grid grid-cols-autofill-minmax14.75rem1fr gap-[1.875rem]">
				{Array(8).fill(1).map((item, idx) => {
					return <ProductCard key={idx} urlImg={product} />;
				})}
                </div>
			</section> */}

            <section className="container-big">
            <Carousel
                showThumbs={false}
                infiniteLoop={true}
                showStatus={false}
                renderArrowPrev={getCustomRenderArrowFunction(eArrow.prev)}
                renderArrowNext={getCustomRenderArrowFunction(eArrow.next)}
                renderIndicator={customRenderIndicatorFunction}
            >
                <div className="container-big bg-bgclr-secondary-1 text-clr-light grid grid-cols-autofill-minmax20rem1fr grid-rows-[45rem] auto-rows-[30rem]">
                        <div className="flex items-center justify-end">
                            <div className="font-bold flex flex-col items-start gap-y-[2.1875rem] pt-[3.75rem]">
                                <span>SUMMER 2020</span>
                                <h2 className="max-w-[30rem] text-[3.625rem] text-left">Vita Classic Product</h2>
                                <span className="text-[1.25rem] w-[70%] text-left font-normal">We know how large objects will act, but things on a small scale.</span>
                                <div className="flex flex-wrap items-center">
                                    <span className="text-[1.5rem] mr-[2.125rem]" >$16.48</span>
                                    <Link className="btn-md bg-bgclr-success rounded-[5px]" to="#">ADD TO CART</Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="h-full w-full flex items-end justify-center">
                            <div className="h-full w-full md:h-[80%] md:w-[60%]">
                                <img className="h-full w-full object-cover object-top" src={hero2} alt="img" />
                            </div>
                        </div>
                </div>
                <div className="container-big bg-bgclr-secondary-1 text-clr-light grid grid-cols-autofill-minmax20rem1fr grid-rows-[45rem] auto-rows-[30rem]">
                        <div className="flex items-center justify-end">
                            <div className="font-bold flex flex-col items-start gap-y-[2.1875rem] pt-[3.75rem]">
                                <span>SUMMER 2020</span>
                                <h2 className="max-w-[30rem] text-[3.625rem] text-left">Vita Classic Product</h2>
                                <span className="text-[1.25rem] w-[70%] text-left font-normal">We know how large objects will act, but things on a small scale.</span>
                                <div className="flex flex-wrap items-center">
                                    <span className="text-[1.5rem] mr-[2.125rem]" >$16.48</span>
                                    <Link className="btn-md bg-bgclr-success rounded-[5px]" to="#">ADD TO CART</Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="h-full w-full flex items-end justify-center">
                            <div className="h-full w-full md:h-[80%] md:w-[60%]">
                                <img className="h-full w-full object-cover object-top" src={hero2} alt="img" />
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

            <section className="container-small py-[7rem] text-center">
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