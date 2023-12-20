export default function FooterContact({...rest}) {

    return (
        <div {...rest}>
            <h5 className="text-clr-dark font-bold mb-[1.25rem]">Get In Touch</h5>
            <div className="mb-[.5rem] flex w-full">
                <input className="min-w-[0px] shrink-[3] grow-[3] px-[1.25rem] py-[0.9375rem] rounded-s-[5px] border-[1px] border-[#E6E6E6]" type="text" placeholder="Your Email"/>
                <input className="min-w-[0px] shrink-[1] grow-[1] px-[1.40625rem] py-[0.9375rem] border-[1px] border-l-0 rounded-e-[5px] border-[#E6E6E6] text-clr-light bg-bgclr-primary" type="submit" value="Subscribe"/>
            </div>
            <p className="text-clr-second">Lore imp sum dolor Amit</p>
        </div>
    );
}