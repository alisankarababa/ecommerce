import Path from "../Path";

export default function SectionTop() {
	return (
		<div className="bg-bgclr-light">
			<div className="container-small">
				<div className="py-[3.125em]">
					<h1 className="text-clr-second font-bold mb-[1rem]">WHAT WE DO</h1>
					<p className="mb-[1rem] text-clr-dark font-bold text-[2.5rem] sm:text-[3.625rem]">
						Innovation tailored for you
					</p>
					<Path className="justify-center" />
				</div>
			</div>
		</div>
	);
}
