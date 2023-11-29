import Statistic from "../Statistic";


export default function Statistics() {
	return (
		<div className="bg-bgclr-light">
			<div className="container-small">
				<section className="py-[5rem] flex flex-wrap items-start justify-center  gap-x-[1.875rem] gap-y-[6.25rem]">
                    <Statistic className="basis-[14.875rem]" numberText="15K" text="Happy Customers"/>
                    <Statistic className="basis-[14.875rem]" numberText="150K" text="Monthly Visitors"/>
                    <Statistic className="basis-[14.875rem]" numberText="15" text="Countries Worlwide"/>
                    <Statistic className="basis-[14.875rem]" numberText="100+" text="Top Partners"/>
				</section>
			</div>
		</div>
	);
}
