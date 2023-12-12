import { Card, CardImg } from "./Card";
import { IconFacebook, IconInstagram, IconTwitter } from "./Icons";

//TODO take social media links 
export default function CardUser({urlImg, username, profession, ...rest}) {

    return (
        <Card {...rest}>
            <div>
                <CardImg className="aspect-[137/100]" urlImg={urlImg} altImg="img-user"/>
            </div>
            <div className="p-[1.875em] flex flex-col items-center gap-y-[0.625rem]">
                <span className="text-clr-dark font-bold">{username}</span>
                <span className="text-clr-second font-bold text-[0.875rem]">{profession}</span>
                <div className="flex items-center gap-[1.25rem]">
                    <IconFacebook className="text-clr-primary text-[1.5rem]"/>
                    <IconInstagram className="text-clr-primary text-[1.5rem]"/>
                    <IconTwitter className="text-clr-primary text-[1.5rem]"/>
                </div>
            </div>
        </Card>
    );


}