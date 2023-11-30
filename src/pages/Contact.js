import SectionOffer from "../components/contact-page/SectionOffer";


export default function Contact() {


    return (
        <>
            <div className="bg-bgclr-light">
                <div className="container-small">
                    <div className="font-bold pb-[5em]">
                        <img className="m-auto mb-[1.25rem]" src={arrow} alt="icon"/>
                        <h6 className="text-clr-dark mb-[1rem]">WE Can't WAIT TO MEET YOU</h6>
                        <h2 className="text-clr-dark mb-[1rem] text-[3.625rem]">Let's Talk</h2>
                        <button className="btn-primary btn-small-wide">Try it free now</button>
                    </div>
                </div>
            </div>
            <SectionOffer />
        </>
    );

}