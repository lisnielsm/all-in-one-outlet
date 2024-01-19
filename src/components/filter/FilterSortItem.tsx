"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Sort } from "@/products";

interface Props {
	sortItem: Sort;
}

export const FilterSortItem = ({ sortItem }: Props) => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const url = new URLSearchParams(Array.from(searchParams.entries()));
	url.delete("sort");

  const handleSort = () => {
    url.set("sort", sortItem.id);
    const search = url.toString();
		const query = search ? `?${search}` : "";

		router.push(`${pathname}${query}`);
  }

	return (
		<li
			className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline cursor-pointer"
			data-te-dropdown-item-ref
      onClick={handleSort}
		>
			{sortItem.name}
		</li>
	);
};
