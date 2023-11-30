
import Clients from "../components/Clients"
import Statistics from "../components/about-page/Statistics"
import SectionTeam from "../components/SectionTeam";
import SectionText from "../components/about-page/SectionText";
import SectionImgVideo from "../components/about-page/SectionImgVideo";
import HeroAbout2 from "../components/about-page/HeroAbout2";

export default function About() {
    return (
			<>
                <SectionText />
                <Statistics />
                <SectionImgVideo />
                <SectionTeam />
				<Clients />
                <HeroAbout2 />
			</>
		);
}