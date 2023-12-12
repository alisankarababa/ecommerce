export default function Statistic({numberText, text, className, ...rest}) {

    const defaultClasses = "text-center font-bold";
    className = className ? `${className} ${defaultClasses}` : defaultClasses; 

    return (
		<div className={className}>
			<span className="block text-clr-dark text-[3.625rem]">{numberText}</span>
			<span className="block text-clr-second fon">{text}</span>
		</div>
	);
}
