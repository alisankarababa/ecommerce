import cl1 from "../assets/clients/fa-brands-1.svg"
import cl2 from "../assets/clients/fa-brands-2.svg"
import cl3 from "../assets/clients/fa-brands-3.svg"
import cl4 from "../assets/clients/fa-brands-4.svg"
import cl5 from "../assets/clients/fa-brands-5.svg"
import cl6 from "../assets/clients/fa-brands-6.svg"

export default function Clients() {

    return (
        <div className="bg-bgclr-ligth-gray-1">
            <div className="container-small py-[3.125rem] flex flex-wrap justify-between items-center gap-[2rem]">
                <div className="flex flex-col items-center"><img src={cl1} alt="client1"/></div>
                <div className="flex flex-col items-center"><img src={cl2} alt="client2"/></div>
                <div className="flex flex-col items-center"><img src={cl3} alt="client3"/></div>
                <div className="flex flex-col items-center"><img src={cl4} alt="client4"/></div>
                <div className="flex flex-col items-center"><img src={cl5} alt="client5"/></div>
                <div className="flex flex-col items-center"><img src={cl6} alt="client6"/></div>
            </div>
        </div>
    );

}