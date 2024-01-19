'use client';

import { useEffect } from 'react';

import { useAppSelector } from '@/store';
import { FilterSortItem } from './FilterSortItem';

export const FilterSort = () => {
  const selectedSort = useAppSelector(state => state.ui.productList?.sort);
  const availableSorts = useAppSelector(state => state.ui.productList?.available_sorts) || [];

  useEffect(() => {
		const init = async () => {
			const { Dropdown, Ripple, initTE } = await import("tw-elements");
			initTE({ Dropdown, Ripple });
		};
		init();
	}, []);

	return (
		<div className="flex gap-2 items-center flex-nowrap" data-te-dropdown-ref>
			<span>Sort by:&nbsp;</span>
      <div className="relative">
        <button
          className="flex items-center whitespace-nowrap rounded-full bg-gray-200 py-1 pl-3 pr-4 text-sm font-medium leading-normal text-gray-700 shadow-sm transition duration-150 ease-in-out hover:bg-gray-300 focus:bg-gray-300"
          type="button"
          id="dropdownMenu"
          data-te-dropdown-toggle-ref
          aria-expanded="false"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          {selectedSort?.name}
          <span className="ml-2 w-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
        <ul
          className="absolute z-[1000] top-0 right-0 w-full m-0 mx-auto hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg [&[data-te-dropdown-show]]:block"
          aria-labelledby="dropdownMenu"
          data-te-dropdown-menu-ref
        >
          { availableSorts.map(opt => (
            <FilterSortItem key={opt.id} sortItem={opt} />
          )) }
        </ul>
      </div>
		</div>
	);
};
