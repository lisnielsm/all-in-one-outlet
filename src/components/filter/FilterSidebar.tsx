"use client";

import { useAppSelector } from "@/store";
import { FilterMenuOption } from "./FilterMenuOption";
import { FilterCategories } from "./FilterCategories";

export const FilterSidebar = () => {
	const availableFilters =
		useAppSelector((state) => state.ui.productList?.available_filters) ||
		[];

	return (
		<aside className="hidden sm:flex flex-col gap-3 w-[300px] min-w-[300px] p-2">
			<article className="flex flex-col gap-3">
				<h2 className="text-xl pb-2">Filters</h2>
				<FilterCategories />
				<>
					{availableFilters.map((filter) => (
						<FilterMenuOption key={filter.id} filter={filter} />
					))}
				</>
			</article>
		</aside>
	);
};
