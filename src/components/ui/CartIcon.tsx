import React from 'react';

interface Props {
  productCount?: number;
}

export const CartIcon = ({ productCount = 0}: Props) => {


	return (
		<button
			type="button"
			className="relative inline-flex items-center p-3 text-sm font-medium text-center bg-transparent rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300"
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
			{ productCount > 0 ? (
        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-1 border-white rounded-full -top-1 -end-1 dark:border-gray-600">
          {productCount}
        </div>
      ) : null }
		</button>
	);
};
