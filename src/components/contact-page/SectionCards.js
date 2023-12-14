import { IconPhone, IconLocationDot, IconEnvelope } from "../../components/Icons";

export default function SectionCards() {
    return (
<div className="bg-bgclr-light">
                <div className="container-small">
                    <section className="font-bold py-[5em]">
                        <div className="max-w-[40rem] m-auto mb-[5rem]">
                            <h6 className="text-[0.875rem] text-clr-dark">VISIT OUR OFFICE</h6>
                            <h2 className="text-[2.5rem] text-clr-dark">We help small businesses with big ideas</h2>
                        </div>
                        <div className="flex flex-wrap justify-center">
                            <div className="flex flex-col items-center gap-y-[0.9375rem] py-[3.125em] px-[2.5em]">
                                <IconPhone className="text-clr-primary text-[4.5rem]"/>
                                <div className="text-clr-dark text-[0.875rem]">
                                    <p>georgia.young@example.com</p>
                                    <p>georgia.young@ple.com</p>
                                </div>
                                <p className="text-clr-dark">Get Support</p>
                                <button className="pill-shape self-center btn-primary-outline btn-small-wide">Submit Request</button>
                            </div>
                            <div className="flex flex-col items-center gap-y-[0.9375rem] py-[3.125em] px-[2.5em] bg-bgclr-dark">
                                <IconLocationDot className="text-clr-primary text-[4.5rem]"/>
                                <div className="text-clr-light text-[0.875rem]">
                                    <p>georgia.young@example.com</p>
                                    <p>georgia.young@ple.com</p>
                                </div>
                                <p className="text-clr-light">Get Support</p>
                                <button className="pill-shape self-center btn-primary-outline btn-small-wide">Submit Request</button>
                            </div>
                            <div className="flex flex-col items-center gap-y-[0.9375rem] py-[3.125em] px-[2.5em]">
                                <IconEnvelope className="text-clr-primary text-[4.5rem]"/>
                                <div className="text-clr-dark text-[0.875rem]">
                                    <p>georgia.young@example.com</p>
                                    <p>georgia.young@ple.com</p>
                                </div>
                                <p className="text-clr-dark">Get Support</p>
                                <button className="pill-shape self-center btn-primary-outline btn-small-wide">Submit Request</button>
                            </div>
                        </div>
                    </section>    
                </div>
            </div>
    );
}