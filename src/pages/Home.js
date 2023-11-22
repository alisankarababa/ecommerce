import CategoryCard from "../components/CategoryCard";
import ProductCard from '../components/ProductCard';
import { Carousel } from 'react-responsive-carousel';

import men from "../assets/category-card/men.jpeg"
import women from "../assets/category-card/women.jpeg"
import accessory from "../assets/category-card/accessories.jpeg"
import kids from "../assets/category-card/kids.jpeg"

import product from "../assets/product/example-product.jpeg"

import carouselImg from "../assets/carousel-imgs/carousel-img1.jpeg"


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

                <div className="py-[5rem] flex flex-wrap gap-y-[5rem] gap-x-[1.875rem] justify-center">
				{Array(8).fill(1).map((item, idx) => {
					return <ProductCard key={idx} className="basis-[240px]" urlImg={product} />;
				})}
                </div>
			</section>
        </>
    );
}