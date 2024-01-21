'use client';

import { useAppSelector } from '@/store';

export const CartIcon = () => {
	const cartProducts = useAppSelector((state) => state.ui.cartProducts);

	return (
		<button
			type="button"
			className="relative inline-flex items-center p-3 text-sm font-medium text-center bg-transparent rounded-lg focus:outline-none transition duration-150 ease-in-out"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="w-6 h-6"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
				/>
			</svg>
			<span className="sr-only">Notifications</span>
			{cartProducts.length > 0 ? (
				<div className="absolute inline-flex items-center z-30 justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-1 border-white rounded-full -top-1 -end-1 dark:border-gray-600">
					{cartProducts.length}
				</div>
			) : null}
		</button>
	);
};
