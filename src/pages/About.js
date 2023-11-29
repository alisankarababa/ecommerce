
import Clients from "../components/Clients"
import Statistics from "../components/product-page/Statistics"
import SectionTeam from "../components/product-page/SectionTeam";
import SectionText from "../components/product-page/SectionText";

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