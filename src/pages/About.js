
import Clients from "../components/Clients"
import Statistics from "../components/about-page/Statistics"
import SectionTeam from "../components/SectionTeam";
import SectionText from "../components/about-page/SectionText";
import SectionImgVideo from "../components/about-page/SectionImgVideo";
import HeroAbout2 from "../components/about-page/HeroAbout2";
import imgHero from "../assets/page-about/img-hero.png"

export default function About() {
    return (
			<>
                <div className="bg-bgclr-light">
                    <div className="max-w-[1157px] m-auto">
                        <section className="flex flex-wrap items-center min-h-[625px] gap-[2.5625rem]">
                            <div className="basis-[380px] grow-[5] mb-[2rem] font-bold flex flex-col items-left gap-y-[2.1875rem] text-left">
                                <h5 className="text-clr-dark">ABOUT COMPANY</h5>
                                <h1 className="text-clr-dark text-[3.625rem]">ABOUT US</h1>
                                <p className="text-clr-second text-[1.25rem] max-w-[380px]">We know how large objects will act, but things on a small scale</p>
                                <button className="btn-primary btn-small-wide self-start">Get Quote Now</button>
                            </div>
                            <div className="basis-[460px] grow-[2] self-stretch">
                                <img className="w-full h-full object-cover" src={imgHero} alt="img"/>
                            </div>
                        </section>
                    </div>
                </div>
                <SectionText />
                <Statistics />
                <SectionImgVideo />
                <SectionTeam />
				<Clients />
                <HeroAbout2 />
			</>
		);
}