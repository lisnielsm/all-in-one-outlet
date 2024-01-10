import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
	weight: "600",
	subsets: ["latin"],
	display: "swap",
});

import { CartIcon, Search } from ".";
import Link from "next/link";

export const Header = () => {
	return (
		<header className="w-full bg-[var(--primary-color)] shadow-md fixed top-0 z-30">
			<div className="flex max-w-[1200px] justify-between items-center gap-10 px-4 py-2 mx-auto">
				<Link href="/">
					<span
						className={`${dancingScript.className} text-3xl whitespace-nowrap`}
					>
						All-in-One Outlet
					</span>
				</Link>
        
				<Search />

				<CartIcon productCount={5} />
			</div>
		</header>
	);
};
