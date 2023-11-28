import { Link } from "react-router-dom/cjs/react-router-dom";

export default function ProductNavBar() {

    return (
        <div className="bg-bgclr-light">
            <div className="container-small">
                <nav className="text-[0.875rem] py-[0.625em] text-clr-second font-bold flex justify-center">
                    <Link className="font-semibold p-[1.5em]" to="#">Description</Link>
                    <Link className="p-[1.5em]" to="#">Additional Information</Link>
                    <Link className="p-[1.5em]" to="#">Rewievs <span className="text-clr-success">(0)</span></Link>
                </nav>
                <hr className="mb-[1rem] border-clr-light-gray-2"/>
            </div>
        </div>
    )
}