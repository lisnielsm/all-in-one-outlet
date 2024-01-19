"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ITEMS_PER_PAGE } from "@/products";
import { useAppSelector } from "@/store";

export const Pagination = () => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const totalCount = useAppSelector(state => state.ui.productList?.paging.total) || 0;

	const current = new URLSearchParams(Array.from(searchParams.entries()));
	const offset = current.get("offset");
	let currentPage = 1;

	try {
		if (offset) {
			currentPage = Number.parseInt(offset, 10) / ITEMS_PER_PAGE + 1;
		}
	} catch (error) {
		console.log("Ocurrio un error obteniendo el offset");
	}

	const pagesNumber = Math.ceil(totalCount / ITEMS_PER_PAGE);

	const changeURLByQuery = () => {
		// cast to string
		const search = current.toString();
		const query = search ? `?${search}` : "";

		router.push(`${pathname}${query}`);
	};

	const onHandlePrevious = () => {
		current.set("offset", ((currentPage - 2) * ITEMS_PER_PAGE).toString());

		changeURLByQuery();
	};

	const onHandleNext = () => {
		current.set("offset", (currentPage * ITEMS_PER_PAGE).toString());

		changeURLByQuery();
	};

	return (
		<div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-3">
			<div className="flex flex-1 justify-center items-center gap-4">
				{currentPage !== 1 ? (
					<button
						type="button"
						className="flex items-center gap-2 flex-nowrap p-2 pr-3 bg-white rounded-md border border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-gray-100"
						onClick={onHandlePrevious}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="h-5 w-5"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15.75 19.5L8.25 12l7.5-7.5"
							/>
						</svg>
						<span className="hidden sm:inline">Previous</span>
					</button>
				) : null}

				<div className="flex items-center gap-3">
					<div className="py-2 px-4 rounded-md bg-gray-100">
						{currentPage}
					</div>
					<span>of</span>
					<span>{pagesNumber}</span>
				</div>

				{currentPage !== pagesNumber ? (
					<button
						type="button"
						className="flex items-center gap-2 flex-nowrap p-2 pl-3 bg-white rounded-md border border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-gray-100"
						onClick={onHandleNext}
					>
						<span className="hidden sm:inline">Next</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="h-5 w-5"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M8.25 4.5l7.5 7.5-7.5 7.5"
							/>
						</svg>
					</button>
				) : null}
			</div>
		</div>
	);
};
