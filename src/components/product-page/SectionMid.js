import IconWithText from "../IconWithText";
import imgSecMid from "../../assets/page-product/section-mid/sec-mid.jpeg";

export default function SectionMid() {
	return (
		<div className="bg-bgclr-light">
			<section className="container-small text-left">
				<div className="py-[1.5rem] flex flex-wrap gap-[2rem]">
					<div className="basis-[300px] grow">
						<img
							className="w-full aspect-[87/100] object-cover rounded-[5px] shadow-[0_35px_60px_-15px_rgba(196,196,196,0.2)]"
							src={imgSecMid}
							alt="img"
						></img>
					</div>
					<div className="basis-[300px] grow">
						<h5 className="mb-[2rem] font-bold text-[1.5rem] text-clr-dark ">
							the quick fox jumps over
						</h5>
						<p className="text-[0.875rem] text-clr-second mb-[1.5rem]">
							Met minim Mollie non desert Alamo est sit cliquey dolor do met
							sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
							venial consequent sent nostrum met.
						</p>
						<p className="text-[0.875rem] text-clr-second mb-[1.5rem]">
							Met minim Mollie non desert Alamo est sit cliquey dolor do met
							sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
							venial consequent sent nostrum met.
						</p>
						<p className="text-[0.875rem] text-clr-second mb-[1.5rem]">
							Met minim Mollie non desert Alamo est sit cliquey dolor do met
							sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
							venial consequent sent nostrum met.
						</p>
					</div>
					<div className="basis-[300px] grow">
						<div className="mb-[1.5rem]">
							<h5 className="mb-[2rem] font-bold text-[1.5rem] text-clr-dark">
								the quick fox jumps over
							</h5>
							<IconWithText
								className="mb-[0.625rem] flex items-center gap-x-[0.5rem]"
								classIcon="fa-solid fa-chevron-right"
								classText="text-[0.875rem] text-clr-second font-bold"
								text="the quick fox jumps over the lazy dog"
							/>
							<IconWithText
								className="mb-[0.625rem] flex items-center gap-x-[0.5rem]"
								classIcon="fa-solid fa-chevron-right"
								classText="text-[0.875rem] text-clr-second font-bold"
								text="the quick fox jumps over the lazy dog"
							/>
							<IconWithText
								className="mb-[0.625rem] flex items-center gap-x-[0.5rem]"
								classIcon="fa-solid fa-chevron-right"
								classText="text-[0.875rem] text-clr-second font-bold"
								text="the quick fox jumps over the lazy dog"
							/>
						</div>
						<div>
							<h5 className="mb-[2rem] font-bold text-[1.5rem] text-clr-dark">
								the quick fox jumps over
							</h5>
							<IconWithText
								className="mb-[0.625rem] flex items-center gap-x-[0.5rem]"
								classIcon="fa-solid fa-chevron-right"
								classText="text-[0.875rem] text-clr-second font-bold"
								text="the quick fox jumps over the lazy dog"
							/>
							<IconWithText
								className="mb-[0.625rem] flex items-center gap-x-[0.5rem]"
								classIcon="fa-solid fa-chevron-right"
								classText="text-[0.875rem] text-clr-second font-bold"
								text="the quick fox jumps over the lazy dog"
							/>
							<IconWithText
								className="mb-[0.625rem] flex items-center gap-x-[0.5rem]"
								classIcon="fa-solid fa-chevron-right"
								classText="text-[0.875rem] text-clr-second font-bold"
								text="the quick fox jumps over the lazy dog"
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
