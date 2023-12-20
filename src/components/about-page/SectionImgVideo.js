import imgVideo from "../../assets/page-about/img-video.jpeg"
import { IconPlay } from "../Icons"


export default function SectionImgVideo() {


    return (
        <div className="bg-bgclr-light">
            <div className="container-small">
                <section className="relative py-[7em] px-[2em]">
                    <img className="object-cover rounded-[1.25rem]" src={imgVideo} alt="video-thumb"/>
                    <div className="bg-bgclr-primary absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-[10%] aspect-square rounded-full">
                        <IconPlay className= "absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 text-[1.2rem] text-clr-light"/>
                    </div>
                </section>
            </div>
        </div>
    )
}