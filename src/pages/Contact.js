import SectionOffer from "../components/contact-page/SectionOffer";
import SectionCards from "../components/contact-page/SectionCards";
import imgHero from "../assets/page-contact/img-hero.png"
import { IconFacebookSquare, IconInstagram, IconTwitter,IconLinkedIn } from "../components/Icons";


export default function Contact() {

    return (
        <>
        <div className="bg-bgclr-light">
                    <div className="max-w-[1100px] m-auto px-[1rem]">
                        <section className="grid grid-cols-autofill-minmax20rem1fr auto-rows-[40rem]">
                            <div className="flex items-center justify-start">
                                <div className="font-bold flex text-clr-dark flex-col items-center md:items-start gap-y-[2.1875rem] md:text-left w-full">
                                    <h5 className="">CONTACT US</h5>
                                    <h1 className="text-[2.5rem] md:text-[3.625rem]">Get in touch today!</h1>
                                    <p className="text-clr-second text-[1.25rem] max-w-[70%] md:max-w-[380px] m-auto md:m-0">We know how large objects will act, but things on a small scale</p>
                                    <p className="text-[1.5rem]">Phone : +451 215 215 </p>
                                    <p className="text-[1.5rem]">Fax : +451 215 215</p>
                                    <div className="flex gap-x-[2.125rem] text-[1.875rem]">
                                        <IconTwitter />
                                        <IconFacebookSquare/>
                                        <IconInstagram />
                                        <IconLinkedIn />
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <img className="w-full h-full object-cover" src={imgHero} alt="img"/>
                            </div>
                        </section>
                    </div>
                </div>
            <SectionCards />
            <SectionOffer />
        </>
    );

}