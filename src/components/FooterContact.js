export default function FooterContact() {

    return (
        <div>
            <h5 className="text-clr-dark font-bold mb-[1.25rem]">Get In Touch</h5>
            <div className="w-full overflow-hidden border-[1px] rounded-[5px] border-[#E6E6E6]">
                <input className="px-[1.25rem] py-[0.9375rem]" type="text" placeholder="Your Email"/>
                <input className="px-[1.40625rem] py-[0.9375rem] text-clr-light bg-bgclr-primary" type="submit" value="Subscribe"/>
            </div>
            <p className="text-clr-second">Lore imp sum dolor Amit</p>
        </div>
    );
}