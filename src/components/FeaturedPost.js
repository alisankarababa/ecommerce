import IconWithText from "./IconWithText";

export default function FeaturedPost({urlImg, className}) {

    const defaultClasses = "text-left";
    
    className = className ? `${defaultClasses} ${className}` : defaultClasses;

    return (

        <div className={className}>
            <div className="aspect-[348/300] relative">
                <img className="img-absolute" src={urlImg} alt="img-featured-post"/>
            </div>

            <div className="flex flex-col gap-y-[0.625rem] px-[1.5625rem] pt-[1.5625rem] pb-[2.1875rem]">
                <div className="text-[0.75rem]">
                    <span className="text-clr-disabled-element mr-[1rem]">Google</span>
                    <span className="text-clr-second mr-[1rem]" >Trending</span>
                    <span className="text-clr-second mr-[1rem]">New</span>
                </div>
                <h5 className="text-[1.25rem] text-clr-dark">Loudest à la Madison #1 (L'integral)</h5>
                <p className="max-w-[90%] text-[0.875rem] text-clr-second">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                
                <div className="flex justify-between">
                    <IconWithText className="flex items-center gap-[0.3125rem]" classIcon="text-clr-primary fa-regular fa-clock" classText="text-[0.75rem] text-clr-second" text="22 April 2021"/>
                    <IconWithText className="flex items-center gap-[0.3125rem]" classIcon="text-clr-secondary-1 fa-solid fa-chart-line" classText="text-[0.75rem] text-clr-second" text="22 April 2021"/>
                </div>
                <div className="flex items-center">
                    <span className="font-bold text-[0.875rem] text-clr-second mr-[0.625rem]">Learn More</span>
                    <i className="text-clr-primary fa-solid fa-chevron-right"></i>
                </div>
            </div>
        </div>
    );


}