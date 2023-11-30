import { useLocation, Link } from "react-router-dom/cjs/react-router-dom";
import { getClassName } from "../utils/ClassName";

export default function Path({className}) {

    const { pathname } = useLocation();
    const arrLocation = pathname.split("/").filter( item => item !== "").map(element => {
        return element.slice(0,1).toUpperCase() + element.slice(1,element.length);
    });

    const classesDefault = "flex items-center gap-x-[1rem]";
    
	return (
		<div className={getClassName(classesDefault, className)}>
			<Link to="/home" className="text-clr-dark text-[0.875rem] font-bold">Home</Link>
			<i className="text-clr-muted fa-solid fa-chevron-right"></i>

            {
                arrLocation.map((item, idx) => {
                    
                    if(idx < arrLocation.length - 1) {
                        return(
                            <>
                                <Link to={`/${item}`} className="text-clr-dark text-[0.875rem] font-bold">{item.slice(0,1).toUpperCase() + item.slice(1,item.length)}</Link>
                    			<i className="text-clr-muted fa-solid fa-chevron-right"></i>
                            </>
                        )
                    }
                    return <span className="text-clr-second text-[0.875rem] font-bold">{item.slice(0,1).toUpperCase() + item.slice(1,item.length)}</span>
                })
            }
		</div>
	);
}
