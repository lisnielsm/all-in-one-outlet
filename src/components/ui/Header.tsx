"use client";

import React from 'react';
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
	weight: "600",
	subsets: ["latin"],
	display: "swap",
});

import Link from "next/link";
import { CartIcon, SearchInput } from "..";

export const Header = () => {

	return (
		<header className="bg-[var(--primary-color)] shadow-md fixed top-0 left-0 right-0 z-30">
			<div className="flex justify-between items-center gap-4 sm:gap-10 px-4 py-2 mx-auto">
				<Link href="/">
					<span
						className={`${dancingScript.className} text-4xl whitespace-nowrap`}
					>
						All-in-One
					</span>
				</Link>

				<div className="hidden sm:block w-full">
					<SearchInput />
				</div>

				<div className="flex items-center gap-5">
					<CartIcon productCount={5} />

					<div className="flex items-center sm:hidden">
						<button
							className="bg-transparent"
							data-te-offcanvas-toggle
							data-te-target="#offcanvasRight"
							aria-controls="offcanvasRight"
							data-te-ripple-init
							data-te-ripple-color="light"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-8 h-8"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};
