export default function CategoryCard({urlImg, textBtn, className}) {

    className = className ? "relative " + className : "relative";

    return (
        <div className={className}>
            <img className="h-full w-full object-cover absolute translate-x-1/2 right-1/2" src={urlImg} alt="img-category"/>
            <button className="bg-bgclr-light text-clr-dark font-bold min-w-[33.33%] py-[0.75em] px-[1.625em] absolute left-[1rem] bottom-[1rem] z-10">{textBtn}</button>
        </div>
    );
}