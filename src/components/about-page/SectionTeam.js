import CardUser from "../CardUser";
import teamMember1 from "../../assets/page-about/teammember1.jpeg";

export default function SectionTeam() {
	return (
		<div className="bg-bgclr-light">
			<div className="container-small">
				<section className="py-[7rem]">
					<div className="text-center mb-[7rem]">
						<h2 className="max-w-[55%] m-auto mb-[0.625rem] text-clr-dark text-[2.5rem] font-bold">
							Meet Our Team
						</h2>
						<p className="max-w-[45%] m-auto text-clr-second text-[0.875rem]">
							Problems trying to resolve the conflict between the two major
							realms of Classical physics: Newtonian mechanics{" "}
						</p>
					</div>
					<div className="flex justify-center flex-wrap basis-[19.75rem] gap-[1.875rem]">
						<CardUser
							className="basis-[19.75rem]"
							urlImg={teamMember1}
							username="Username"
							profession="Profession"
						/>
						<CardUser
							className="basis-[19.75rem]"
							urlImg={teamMember1}
							username="Username"
							profession="Profession"
						/>
						<CardUser
							className="basis-[19.75rem]"
							urlImg={teamMember1}
							username="Username"
							profession="Profession"
						/>
					</div>
				</section>
			</div>
		</div>
	);
}
