"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FilterValue } from "@/products";

interface Props {
	filterValue: FilterValue;
	parentId: string;
}

export const FilterCategoriesItem = ({ filterValue, parentId }: Props) => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const handleClick = () => {
		const url = new URLSearchParams(Array.from(searchParams.entries()));
		url.delete(parentId);
		const search = url.toString();
		const query = search ? `?${search}` : "";

		router.push(`${pathname}${query}`);
	};

	return (
		<section
			data-te-chip-init
			data-te-ripple-init
			className="[word-wrap: break-word] inline-flex pl-2 cursor-pointer text-sm font-semibold items-center rounded-full bg-gray-200 normal-case text-gray-700 shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none"
			data-te-ripple-color="dark"
		>
			{filterValue.name}
			<button
        type="button"
				data-te-chip-close
				className="ml-1 p-2 text-gray-700 transition-all duration-200 ease-in-out hover:bg-gray-300 rounded-full"
        onClick={handleClick}
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
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>
		</section>
	);
};
