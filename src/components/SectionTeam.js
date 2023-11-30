import TeamDisplay from "./TeamDisplay";

import { useLocation } from "react-router-dom/cjs/react-router-dom";


export default function SectionTeam() {

    const {pathname} = useLocation();

    let cntTeamMember = 1; //this should change
    let renderParagraph = false;
    switch (pathname) {
        case "/about":
            cntTeamMember=3;
            renderParagraph = true;
            break;
        case "/team":
            cntTeamMember=9;
            break;
        default:
            console.log("SectionTeam something went wrong")
            break;
    }

	return (
		<div className="bg-bgclr-light">
			<div className="container-small">
				<section className="py-[7rem]">
                    <div className="mb-[7rem]">
                        <h2 className="max-w-[55%] m-auto mb-[0.625rem] text-clr-dark text-[2.5rem] font-bold">Meet Our Team</h2>
                                            {
                            renderParagraph &&
                            <p className="max-w-[45%] m-auto text-clr-second text-[0.875rem]">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
                        }
                    </div>
                    <TeamDisplay className="flex justify-center flex-wrap gap-x-[1.875rem] gap-y-[7rem]" cntTeamMember={cntTeamMember}/>
				</section>
			</div>
		</div>
	);
}
