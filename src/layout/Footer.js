import Brand from "../components/Brand";
import FooterColumn from "../components/FooterColumn";
import FooterContact from "../components/FooterContact";

export default function Footer() {
	return (
		<footer className="text-left">
			<div className="bg-bgclr-ligth-gray-1">
				<div className=" py-[2.5em] container-small xs:flex xs:justify-between xs:items-center)">
					<Brand />
					<div className="mt-[0.7rem] xs:mt-0 text-clr-primary flex gap-x-[1.25rem] text-[1.5rem]">
						<i className="fa-brands fa-facebook"></i>
						<i className="fa-brands fa-instagram"></i>
						<i className="fa-brands fa-twitter"></i>
					</div>
				</div>
			</div>
			<div className="">

			<div className="flex flex-wrap py-[3.125rem] justify-start container-small gap-[1.88rem]">
				<FooterColumn
                    className="basis-[9.25rem]"
					title="Company Info"
					items={["About Us", "Carrier", "We are hiring", "Blog"]}
				/>
				<FooterColumn
                    className="basis-[9.25rem]"
					title="Legal"
					items={["About Us", "Carrier", "We are hiring", "Blog"]}
				/>
				<FooterColumn
                    className="basis-[9.25rem]"
					title="Features"
					items={[
						"Business Marketing",
						"User Analytic",
						"Live Chat",
						"Unlimited Support",
					]}
				/>
				<FooterColumn
                    className="basis-[9.25rem]"
					title="Resources"
					items={["IOS & Android", "Watch a Demo", "Customers", "API"]}
				/>
                <FooterContact className="max-w-[20rem] min-w-[10rem]"/>
			</div>
			</div>
            <div className="bg-bgclr-ligth-gray-1">
			    <div className="py-[1.5625rem] container-small text-center xs:text-left text-[0.875rem] font-bold text-clr-second">Made With Love By Finland All Right Reserved</div>
            </div>
		</footer>
	);
}
