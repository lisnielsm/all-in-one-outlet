'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

import { useAppSelector } from '@/store';
import { FilterMenuOption } from './FilterMenuOption';
import { FilterCategories } from './FilterCategories';

export const FilterDrawer = () => {
	const query = useSearchParams();
	const availableFilters = useAppSelector((state) => state.ui.productList?.available_filters) || [];
	const paging = useAppSelector((state) => state.ui.productList?.paging) || null;
	const products = useAppSelector((state) => state.ui.productList?.results) || [];

	useEffect(() => {
		const init = async () => {
			const { Offcanvas, Ripple, initTE } = await import('tw-elements');
			initTE({ Offcanvas, Ripple });
		};
		init();
	}, []);

	return (
		<aside
			className={`
          className="invisible fixed bottom-0 right-left top-0 z-[1045] flex w-96 max-w-full -translate-x-full
          flex-col border-none bg-white bg-clip-padding text-neutral-700 shadow-sm outline-none
          transition duration-300 ease-in-out [&[data-te-offcanvas-show]]:transform-none`}
			tabIndex={-1}
			id="filterDrawer"
			aria-labelledby="filterDrawerLabel"
			data-te-offcanvas-init
		>
			<div className="p-4 overflow-auto">
				<div className="flex justify-between w-full mb-3 pb-2 border-b border-gray-400">
					<h2 className="text-xl">Filters</h2>

					<button
						type="button"
						className="text-slate-800 box-content rounded-none border-none opacity-50 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
						data-te-offcanvas-dismiss
					>
						<span className="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="h-6 w-6"
							>
								<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</span>
					</button>
				</div>

				{paging ? (
					<p className="inline-block sm:hidden mb-3">
						<span>{paging.offset + 1}</span>
						&nbsp;to&nbsp;
						<span>{paging.offset + products.length}</span>
						&nbsp;of&nbsp;
						<span>{paging.total}</span>
						&nbsp;results&nbsp;for&nbsp;
						<span>{`"${query.get('q')}"`}</span>
					</p>
				) : null}

				<div className="mb-3">
					<FilterCategories />
				</div>

				<div className="flex flex-col gap-3">
					{availableFilters.map((filter) => (
						<FilterMenuOption key={filter.id} filter={filter} />
					))}
				</div>
			</div>
		</aside>
	);
};
