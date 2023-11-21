import Brand from "../components/Brand";
import FooterColumn from "../components/FooterColumn";
import FooterContact from "../components/FooterContact";

export default function Footer() {
	return (
		<footer className="text-left">
			<div className="bg-bgclr-ligth-gray-1">
				<div className="flex justify-between items-center container py-[2.5em] container-small">
					<Brand />
					<div className="text-clr-primary flex gap-x-[1.25rem] text-[1.5rem]">
						<i class="fa-brands fa-facebook"></i>
						<i class="fa-brands fa-instagram"></i>
						<i class="fa-brands fa-twitter"></i>
					</div>
				</div>
			</div>
			<div className="">

			<div className="flex justify-between py-[3.125rem] container-small">
				<FooterColumn
					title="Company Info"
					items={["About Us", "Carrier", "We are hiring", "Blog"]}
				/>
				<FooterColumn
					title="Legal"
					items={["About Us", "Carrier", "We are hiring", "Blog"]}
				/>
				<FooterColumn
					title="Features"
					items={[
						"Business Marketing",
						"User Analytic",
						"Live Chat",
						"Unlimited Support",
					]}
				/>
				<FooterColumn
					title="Resources"
					items={["IOS & Android", "Watch a Demo", "Customers", "API"]}
				/>
                <FooterContact/>
			</div>
			</div>
            <div className="bg-bgclr-ligth-gray-1">
			    <div className="py-[1.5625rem] container-small text-left text-[0.875rem] font-bold text-clr-second">Made With Love By Finland All Right Reserved</div>
            </div>
		</footer>
	);
}
