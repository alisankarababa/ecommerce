import SectionTeam from "../components/SectionTeam";
import SecitonTrialOffer from "../components/SectionTrialOffer";
import SectionTop from "../components/team-page/SectionTop";
import SectionGallery from "../components/team-page/SectionGallery";



export default function Team() {

    return (
        <>
            <SectionTop/>
            <SectionGallery />
            <SectionTeam />
            <SecitonTrialOffer />
        </>
    )
}