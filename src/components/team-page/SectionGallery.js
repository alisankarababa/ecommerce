import img1 from "../../assets/page-team/img1.jpeg"
import img2 from "../../assets/page-team/img2.jpeg"
import img3 from "../../assets/page-team/img3.jpeg"
import img4 from "../../assets/page-team/img4.jpeg"
import img5 from "../../assets/page-team/img5.jpeg"

export default function SectionGallery() {

    return (
        <div className="bg-bgclr-light">
            <div className="container-big">
                <section className="flex flex-wrap">
                    <div className="basis-[25rem] grow">
                        <img className="object-cover" src={img1} alt="img"></img>
                    </div>
                    <div className="basis-[25rem] grow flex flex-wrap">
                        <img className="w-[50%] aspect-square object-cover" src={img2} alt="img"></img>
                        <img className="w-[50%] aspect-square object-cover" src={img3} alt="img"></img>
                        <img className="w-[50%] aspect-square object-cover" src={img4} alt="img"></img>
                        <img className="w-[50%] aspect-square object-cover" src={img5} alt="img"></img>
                    </div>
                </section>
            </div>
        </div>
    );
}