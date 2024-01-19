"use client";

import { useEffect } from "react";
import { useAppSelector } from "@/store";
import { useSearchParams } from "next/navigation";
import { FilterSort } from "./FilterSort";

export const FilterHeader = () => {
	const query = useSearchParams();
	const paging =
		useAppSelector((state) => state.ui.productList?.paging) || null;
	const products =
		useAppSelector((state) => state.ui.productList?.results) || [];

	useEffect(() => {
		const init = async () => {
			const { Ripple, initTE } = await import("tw-elements");
			initTE({ Ripple });
		};
		init();
	}, []);

	return (
		<article>
			<header className="flex justify-between items-center w-full py-2 px-4 shadow-md border-b border-gray-400 mb-2">
				{products.length === 0 ? (
					<p className="hidden sm:inline-block">
						<span>0 results for</span>
						<span>{`"${query.get("q")}"`}</span>
					</p>
				) : paging ? (
					<p className="hidden sm:inline-block">
						<span>{paging.offset + 1}</span>
						&nbsp;to&nbsp;
						<span>{paging.offset + paging.limit}</span>
						&nbsp;of&nbsp;
						<span>{paging.total}</span>
						&nbsp;results&nbsp;for&nbsp;
						<span>{`"${query.get("q")}"`}</span>
					</p>
				) : null}

				{products.length !== 0 ? (
					<>
						<button
							type="button"
							className="sm:hidden active:bg-gray-200 transition duration-150 ease-in-out p-1 rounded-md"
							data-te-ripple-init
							data-te-ripple-color="light"
							data-te-offcanvas-toggle
							data-te-target="#filterDrawer"
							aria-controls="filterDrawer"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-7 h-7 text-sky-950"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
								/>
							</svg>
						</button>

						<FilterSort />
					</>
				) : null}
			</header>
		</article>
	);
};
