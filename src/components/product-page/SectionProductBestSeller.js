import bestseller1 from "../../assets/page-product/product-bestsellers/bestseller-1.jpeg";
import {
	Card,
	CardTitle,
	CardSubTitle,
	Price,
	CardImg,
} from "../Card";

export default function SectionProductBestSeller() {
	return (
		<div className="bg-bgclr-ligth-gray-1">
			<section className="container-small relative left-[2.5rem] py-[3rem] text-left font-bold ">

                <h3 className="text-[1.5rem] text-clr-dark">BESTSELLER PRODUCTS</h3>
                <hr className="my-[1.5rem] border-clr-light-gray-2"/>
                <div className="flex flex-wrap gap-x-[1.875rem] gap-y-[1.5rem]">
				{Array(8)
					.fill(1)
					.map((item, idx) => {
						return (
							<Card key={idx} className="basis-[239px]">
								<CardImg
									className="w-full aspect-[85/100] object-cover"
									urlImg={bestseller1}
									altImg="img-best-seller"
								/>
								<div className="bg-bgclr-light px-[1.5625rem] pt-[1.5625rem] pb-[2.1875rem]">
									<CardTitle
										className="text-clr-dark mb-[0.625rem]"
										titleLevel="2"
									>
										Graphic Design
									</CardTitle>
									<CardSubTitle
										className="text-clr-second text-[0.875rem] mb-[0.625rem]"
										titleLevel="3"
									>
										English Department
									</CardSubTitle>
									<div className="ml-[0.25rem]">
										<Price className="text-clr-muted mr-[0.35rem]">
											$16.48
										</Price>
										<Price className="text-clr-secondary-1">$6.48</Price>
									</div>
								</div>
							</Card>
						);
					})}
                    </div>
			</section>
		</div>
	);
}
