"use client";

import { useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import { ProductResponse } from "@/products";
import { useAppDispatch, useAppSelector } from "@/store";
import { setProductList } from "@/store/ui/uiSlice";
import { FilterSidebar, Pagination, ProductsGrid } from "..";

interface Props {
	productResponse: ProductResponse;
}

export const Search = ({ productResponse }: Props) => {
	const dispatch = useAppDispatch();
	const isOpenModal = useAppSelector((state) => state.ui.isOpenModal);

	console.log({productResponse})

	useEffect(() => {
		dispatch(setProductList(productResponse));
	}, [productResponse]);

	useEffect(() => {
		// enable/disable the scroll from the modal backdrop
		if (isOpenModal) {
			document.body.classList.add("overflow-y-hidden");
		} else {
			document.body.classList.remove("overflow-y-hidden");
		}
	}, [isOpenModal]);
  
  return (
		<>
			{productResponse.results.length > 0 ? (
				<div className="flex flex-nowrap gap-3">
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
		</>
	);
};
