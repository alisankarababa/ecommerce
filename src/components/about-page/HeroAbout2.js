import imgHero from "../../assets/page-about/hero2.jpeg"

export default function HeroAbout2() {

    return (
        <div className="bg-bgclr-light">
            <div className="container-big">
                <section className="flex flex-wrap">
                    <div className="basis-[850px] bg-bgclr-hover flex justify-center items-center">
                        <div className="w-[54%] text-clr-light font-bold text-left flex flex-col items-start gap-[1.5rem] ">
                            <h5>WORK WITH US</h5>
                            <p className="text-[2.5rem]">Now Let’s grow Yours</p>
                            <p className="text-[0.875rem] font-normal">The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th </p>
                            <button className="self-start btn-light-outline-transparent rounded-[5px] text-[0.875rem] px-[2.5rem] py-[0.9375rem]">Button</button>
                        </div>
                    </div>
                    <div className="basis-[590px] aspect-[590/640]">
                        <img className="w-full h-full object-cover" src={imgHero} alt="img"/>
                    </div>
                </section>
            </div>
        </div>
    )

    
}

