import logo from "@/assets/logo.png";
import Image from "next/image";

const Footer = () => {
    return (
        <div className="footer footer-center p-4 bg-base-200 text-base-content border-t border-base-300">

            {/* right side */}
            <div className="flex items-right gap-4">
                <Image
                    src={logo}
                    alt="FitLog Logo"
                    width={15}
                    height={15}
                />

                <span className="text-lg font-bold tracking-wide">
                    FITLOG
                </span>
            </div>

            {/* left side */}
            <div>
                <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>

        </div>
    );
};

export default Footer;