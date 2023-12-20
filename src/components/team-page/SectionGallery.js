import img1 from "../../assets/page-team/img1.jpeg"
import img2 from "../../assets/page-team/img2.jpeg"
import img3 from "../../assets/page-team/img3.jpeg"
import img4 from "../../assets/page-team/img4.jpeg"
import img5 from "../../assets/page-team/img5.jpeg"

export default function SectionGallery() {

    return (
        <div className="bg-bgclr-light">
            <div className="max-w-[1440px] m-auto">
                <section className="grid grid-cols-autofill-minmax20rem1fr auto-rows-[33.125rem] gap-[.5rem]">
                    <div>
                        <img className="w-full h-full object-cover" src={img1} alt="img"></img>
                    </div>
                    <div className="h-full w-full grid grid-cols-2 grid-rows-2 gap-[.5rem]">
                        <img className="h-full w-full object-cover" src={img2} alt="img"></img>
                        <img className="h-full w-full object-cover col-start-1 row-start-2 md:col-start-2 md:row-start-1" src={img3} alt="img"></img>
                        <img className="h-full w-full object-cover col-start-2 row-start-1 md:col-start-1 md:row-start-2" src={img4} alt="img"></img>
                        <img className="h-full w-full object-cover" src={img5} alt="img"></img>
                    </div>
                </section>
            </div>
        </div>
    );
}