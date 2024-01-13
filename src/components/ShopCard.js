export default function ShopCard({urlImg, text, title, className}) {

    const defaultClasses = "relative flex justify-center items-center";

    className = className ? `${defaultClasses} ${className}` : defaultClasses;

    return (

        <div className={className}>
            <img className="img-absolute" src={urlImg} alt="imgShopCard"/>
            <div className="relative z-10 text-clr-light text-center">
                <span className="font-bold block text-[1.25rem]">{title}</span>
                <span className="text-[1rem] block">{text}</span>
            </div>
        </div>
    );

}