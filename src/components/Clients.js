import cl1 from "../assets/clients/fa-brands-1.svg"
import cl2 from "../assets/clients/fa-brands-2.svg"
import cl3 from "../assets/clients/fa-brands-3.svg"
import cl4 from "../assets/clients/fa-brands-4.svg"
import cl5 from "../assets/clients/fa-brands-5.svg"
import cl6 from "../assets/clients/fa-brands-6.svg"

import { useLocation } from "react-router-dom/cjs/react-router-dom";

function ClientLogos() {
	return (
		<div className="flex flex-wrap justify-between items-center gap-[2rem] py-[3.125em]">
			<div className="flex flex-col items-center">
				<img src={cl1} alt="client1" />
			</div>
			<div className="flex flex-col items-center">
				<img src={cl2} alt="client2" />
			</div>
			<div className="flex flex-col items-center">
				<img src={cl3} alt="client3" />
			</div>
			<div className="flex flex-col items-center">
				<img src={cl4} alt="client4" />
			</div>
			<div className="flex flex-col items-center">
				<img src={cl5} alt="client5" />
			</div>
			<div className="flex flex-col items-center">
				<img src={cl6} alt="client6" />
			</div>
		</div>
	);
}


export default function Clients() {

    const location = useLocation();

    if (location.pathname === "/about") {
			return (
				<div className="bg-bgclr-ligth-gray-1">
					<div className="container-small py-[5em]">
                        <div className="max-w-[864px] m-auto">

						<h2 className="text-clr-dark text-[2.5rem] font-bold mb-[1.875rem]">
							Big Companies Are Here
						</h2>
						<p className="mb-[1.5rem] mx-auto text-clr-second text-[0.875rem] max-w-[50%]">
							Problems trying to resolve the conflict between the two major
							realms of Classical physics: Newtonian mechanics{" "}
						</p>
                        </div>
                        <ClientLogos />
					</div>
				</div>
			);
		}

    return (

        <div className="bg-bgclr-ligth-gray-1">
            <div className="container-small py-[3.125em]">
                <ClientLogos />
            </div>
        </div>

    );
}