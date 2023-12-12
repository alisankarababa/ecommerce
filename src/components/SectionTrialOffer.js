import { IconFacebookSquare, IconInstagram, IconTwitter, IconLinkedIn } from "../components/Icons";

export default function SecitonTrialOffer() {
    return (
        <div className="bg-bgclr-light">
            <div className="container-small">
                <section className="py-[5em] m-auto max-w-[55%] flex flex-col items-center gap-y-[1.875rem]">
                    <h2 className="text-clr-dark text-[2.5rem] font-bold">Start your 14 days free trial</h2>
                    <p className="max-w-[70%] text-clr-second text-[0.875rem]">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.</p>
                    <button className="btn-primary btn-small-wide">Try it free now</button>
                    <div className="flex gap-x-[2.125rem] text-[1.875rem]">
                        <IconTwitter className="text-clr-primary"/>
                        <IconFacebookSquare className="text-[#395185]"/>
                        <IconInstagram />
                        <IconLinkedIn className="text-[#0A66C2]"/>
                    </div>
                </section>
            </div>
        </div>
    )
}