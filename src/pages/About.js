
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
                    <div className="max-w-[1100px] m-auto px-[1rem]">
                        <section className="grid grid-cols-autofill-minmax20rem1fr auto-rows-[40rem]">
                            <div className="flex items-center justify-start">
                                <div className="font-bold flex flex-col gap-y-[2.1875rem] md:text-left md:w-full">
                                    <h5 className="text-clr-dark">ABOUT COMPANY</h5>
                                    <h1 className="text-clr-dark text-[2.5rem] sm:text-[3.625rem]">ABOUT US</h1>
                                    <p className="text-clr-second text-[1.25rem] max-w-[380px] m-auto md:m-0">We know how large objects will act, but things on a small scale</p>
                                    <div>
                                        <button className="btn-primary btn-small-wide">Get Quote Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="">
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