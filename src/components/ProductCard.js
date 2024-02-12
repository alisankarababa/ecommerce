export default function ProductCard({ productName, price, rating, description, urlImg, className}) {

    const defaultClasses = "flex flex-col items-center gap-y-[1.5625rem]";

    className = className ? `${className} ${defaultClasses}`: defaultClasses;

	return (
		<div className={className}>
			<div className="relative w-full aspect-[21/26] sm:aspect-[56/100]">
				<img className="img-absolute" src={urlImg} alt="img-product" />
			</div>
			<div className="flex flex-col gap-y-[0.625rem]">
				<h5 className="text-clr-dark font-bold">{productName}</h5>
				<span className="text-[0.875rem] text-clr-second max-w-[200px] whitespace-nowrap overflow-hidden text-ellipsis">{description}</span>
                <span className="text-clr-secondary-1">{price} ₺</span>
                <span className="text-clr-secondary-1">puan: {rating}</span>
				<div className="flex justify-center gap-x-[0.3125rem]">
					<div className="w-[8%] aspect-square rounded-full bg-bgclr-primary" />
					<div className="w-[8%] aspect-square rounded-full bg-bgclr-secondary-1" />
					<div className="w-[8%] aspect-square rounded-full bg-bgclr-alert" />
					<div className="w-[8%] aspect-square rounded-full bg-bgclr-dark" />
				</div>
			</div>
		</div>
	);
}
