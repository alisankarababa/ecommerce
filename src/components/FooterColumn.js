export default function FooterColumn({ title, items }) {
	return (
		<div>
			<h5 className="font-bold text-clr-dark mb-[0.625rem]">{title}</h5>
            {
                items.map( item => <p className="text-[0.875rem] text-clr-second mt-[0.625rem]" key={item.toString()}>{item}</p>)
            }
		</div>
	);
}
