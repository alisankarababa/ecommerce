import imgHero from "../../assets/page-about/hero2.jpeg"

export default function HeroAbout2() {

    return (
        <div className="bg-bgclr-light">
            <div className="container-big">
                <section className="flex">
                    <div className="basis-[20rem] grow-[5] bg-bgclr-hover flex justify-center items-center py-[11.25em] lg:py-[12.5em]">
                        <div className="max-w-[70%] text-clr-light font-bold flex flex-col items-center lg:items-start gap-[1.5rem] text-center lg:text-left">
                            <h5 className="">WORK WITH US</h5>
                            <p className="text-[2.5rem]">Now Let’s grow Yours</p>
                            <p className="text-[0.875rem] font-normal max-w-[27.5rem]">The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th </p>
                            <button className="btn-light-outline-transparent rounded-[5px] text-[0.875rem] px-[2.5rem] py-[0.9375rem]">Button</button>
                        </div>
                    </div>
                    <div className="basis-[20rem] grow-[2] aspect-[590/640] hidden lg:block">
                        <img className="w-full h-full object-cover" src={imgHero} alt="img"/>
                    </div>
                </section>
            </div>
        </div>
    )

    
}

