// import { useLocation } from "react-router-dom/cjs/react-router-dom";

export default function Path() {

    // TODO: when required uncomment and implement the function so that it shows path st x > y > z ... etc
    // const location = useLocation();
    // const arrLocation = location.pathname.split("/").filter( item => item !== "");

    // console.log(arrLocation);

	return (
		<div className="flex items-center gap-x-[1rem]">
			<span className="text-clr-dark text-[0.875rem] font-bold">Home</span>
			<i className="text-clr-muted fa-solid fa-chevron-right"></i>
			<span className="text-[0.875rem] text-clr-muted font-bold">Shop</span>
		</div>
	);
}
