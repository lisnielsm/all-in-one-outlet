'use client';

import { useEffect, useLayoutEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { ProductError, ProductResponse } from '@/products';
import { useAppDispatch, useAppSelector } from '@/store';
import { setProductList, setToast } from '@/store/ui/uiSlice';
import { FilterSidebar, Pagination, ProductsGrid } from '..';
import { Alert } from './Alert';

interface Props {
	productResponse: ProductResponse | ProductError;
}

export const Search = ({ productResponse }: Props) => {
	const dispatch = useAppDispatch();
	const isOpenModal: boolean = useAppSelector((state) => state.ui.isOpenModal);

	useLayoutEffect(() => {
		if ((productResponse as ProductError).message !== undefined) {
			dispatch(
				setToast({
					isError: true,
					isShow: true,
					message: 'An error occurs when fetching the products',
				}),
			);

			setTimeout(() => {
				dispatch(
					setToast({
						isError: false,
						isShow: false,
						message: '',
					}),
				);
			}, 3000);
		} else {
			dispatch(setProductList(productResponse as ProductResponse));
		}
	}, [productResponse]);

	useEffect(() => {
		// enable/disable the scroll from the modal backdrop
		if (isOpenModal) {
			document.body.classList.add('overflow-y-hidden');
		} else {
			document.body.classList.remove('overflow-y-hidden');
		}
	}, [isOpenModal]);

	return (
		<div>
			<Alert />

			{(productResponse as ProductResponse).results?.length > 0 ? (
				<div className="flex flex-nowrap gap-3 mb-3">
					<FilterSidebar />

					<div className="w-full">
						<ProductsGrid />
						<Pagination />
					</div>
				</div>
			) : (
				<div className="flex flex-col justify-center items-center w-full gap-4">
					<h2 className="text-2xl mt-5">Products not Found</h2>

					<Image
						src="/products-not-found.png"
						alt="Products not found image"
						width={400}
						height={400}
						priority
					/>
					<Link
						href="/"
						className="block py-4 px-6 font-bold text-center text-white uppercase bg-[var(--primary-color)] rounded-md hover:bg-sky-950"
					>
						Back to Home
					</Link>
				</div>
			)}
		</div>
	);
};
