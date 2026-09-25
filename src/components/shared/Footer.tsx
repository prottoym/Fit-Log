import logo from "@/assets/logo.png";
import Image from "next/image";

const Footer = () => {
    return (

        <footer className="flex flex-col items-center justify-between gap-4 border-t border-[#1a1d24] bg-[#090a0d] px-6 py-10 sm:flex-row">

            {/* right side */}
            <div className="flex items-center gap-2">
                <Image
                    src={logo}
                    alt="FitLog Logo"
                    width={20}
                    height={20}
                />

                <span className="font-['Oswald'] text-sm font-bold leading-5 tracking-[0.7px] text-white">
                    FITLOG
                </span>
            </div>

            {/* left side */}
            <div>
                <p className="text-center text-xs leading-4 text-[#6b7280]">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>

        </footer>
    );
};

export default Footer;