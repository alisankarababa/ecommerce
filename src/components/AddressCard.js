export default function AddressCard({address}) {

	return (
		<>
			<div className="flex justify-between mb-[1rem]">
                <div>
                    <i className="fa-solid fa-user text-clr-primary"></i>
                    {" "}
				    <span>
				    	{address.name} {address.surname}
				    </span>
                </div>
				<span>{address.phone}</span>
			</div>
			<div className="text-left">
                {address.address} {address.neighborhood} {address.district}/{address.city}
            </div>
		</>
	);
}