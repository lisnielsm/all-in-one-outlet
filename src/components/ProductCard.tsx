"use client";

import Image from "next/image";

import { GeneralProduct } from "@/products";
import { useAppDispatch } from "@/store";
import {
	setModalId,
	setOpenModal,
} from "@/store/ui/uiSlice";
import { getFormatPrice } from "@/utils";

interface Props {
	product: GeneralProduct;
}

export const ProductCard = ({ product }: Props) => {
	const dispatch = useAppDispatch();

	const openModal = () => {
		dispatch(setModalId(product.id));
		dispatch(setOpenModal(true));
	};

	return (
		<article
			className="w-full bg-white border border-gray-200 rounded-lg shadow-lg cursor-pointer hover:scale-105 relative pb-[70px] px-5"
			onClick={openModal}
		>
			<div className="flex items-center justify-center">
				<Image
					className="p-8 rounded-t-lg"
					src={product.thumbnail}
					alt={product.title}
					width={200}
					height={200}
				/>
			</div>
			<h5 className="font-semibold tracking-tight text-gray-900 mb-2">
				{product.title}
			</h5>
			<div className="flex flex-col items-start absolute left-5 bottom-3">
				{product.original_price &&
				product.price !== product.original_price ? (
					<p className="text-sm line-through text-red-400">
						{getFormatPrice(
							product.original_price ?? 0,
							product.currency_id
						)}
					</p>
				) : null}
				<p className="text-2xl font-bold text-gray-900">
					{getFormatPrice(product.price, product.currency_id)}
				</p>
			</div>
		</article>
	);
};
