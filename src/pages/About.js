
import Clients from "../components/Clients"
import Statistics from "../components/about-page/Statistics"
import SectionTeam from "../components/about-page/SectionTeam";
import SectionText from "../components/about-page/SectionText";

export default function About() {
    return (
			<>
                <SectionText />
                <Statistics />
                <SectionTeam />
				<Clients />
			</>
		);
}