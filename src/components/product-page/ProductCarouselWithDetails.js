import Circle from "../../components/Circle";
import { Carousel } from "react-responsive-carousel";
import { eArrow, getCustomRenderArrowFunction } from "../../utils/Carousel";


import productCarouselImg1 from "../../assets/page-product/product-carousel/img1.jpeg";
import productCarouselImg2 from "../../assets/page-product/product-carousel/img2.jpeg";


//TODO custom thumbnails
export default function ProductCarouselWithDetails() {

    return (
        <div className="bg-bgclr-ligth-gray-1 pb-[3em]">
        <div className="container-small flex flex-wrap gap-x-[2em]">
            <div className="basis-[348px] grow">
                <Carousel
                    infiniteLoop={true}
                    showStatus={false}
                    showIndicators={false}
                    renderArrowPrev={getCustomRenderArrowFunction(eArrow.prev)}
                    renderArrowNext={getCustomRenderArrowFunction(eArrow.next)}
                >
                    <img
                        className="w-100 aspect-square object-cover"
                        src={productCarouselImg1}
                        alt="carousel-img"
                    />
                    <img
                        className="w-100 aspect-square object-cover"
                        src={productCarouselImg2}
                        alt="carousel-img"
                    />
                </Carousel>
            </div>
            <div className="basis-[348px] grow pt-[0.6875em] pl-[1.5em] pr-[1.5em] text-left">
                <h4 className="text-clr-dark text-[1.25rem] mb-[0.75rem]">Floating Point</h4>
                <div className="text-[#F3CD03] mb-[2rem]">
                    <i className=" fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <span className="text-clr-second text-[0.875rem]">
                        10 reviews
                    </span>
                </div>
                <div className="text-clr-dark text-[1.5rem] font-bold mb-[0.5rem]">
                    $1,139.33
                </div>
                <div className="mb-[2rem]">
                    <span className="text-clr-second text-[0.875rem] font-bold">Availability :</span>
                    <span className="text-clr-primary text-[0.875rem] font-bold"> In Stock</span>
                </div>

                <p className="text-[0.875rem] text-[#858585]">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met
                    sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
                    venial consequent sent nostrum met.
                </p>
                <hr className="border-clr-muted my-[1.5rem]"/>

                <div className="flex gap-x-[0.625rem] mb-[4.2rem]">
                    <Circle size="md" bgColor="bg-bgclr-primary"/>
                    <Circle size="md" bgColor="bg-bgclr-success"/>
                    <Circle size="md" bgColor="bg-bgclr-alert"/>
                    <Circle size="md" bgColor="bg-bgclr-dark"/>
                </div>

                {/* TODO: iconlar ortalı görünmüyor */}
                <div className="flex items-center gap-x-[0.625rem]">
                    <button className="btn-small btn-primary font-bold">Select Options</button>
                    <i className="aspect-square rounded-full p-[0.5em] border-[1px] border-clr-muted text-[1.25rem] fa-regular fa-heart"></i>
                    <i className="aspect-square rounded-full p-[0.5em] border-[1px] border-clr-muted text-[1.25rem] fa-solid fa-cart-shopping"></i>
                    <i className="aspect-square rounded-full p-[0.5em] border-[1px] border-clr-muted text-[1.25rem] fa-solid fa-eye"></i>
                </div>
            </div>
        </div>
    </div>
    );
}