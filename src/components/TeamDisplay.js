import teamMember1 from "../assets/page-about/teammember1.jpeg";
import CardUser from "./CardUser";

export default function TeamDisplay({ cntTeamMember, ...rest }) {
	return (
		<div {...rest}>
            {
                Array(cntTeamMember).fill(1).map((item, idx) => {

                    return <CardUser key={idx} className="basis-[19.75rem]" urlImg={teamMember1} username="Username" profession="Profession" />
                })
            }
		</div>
	);
}
