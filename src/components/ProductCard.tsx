"use client";

import { useState } from "react";

import Image from "next/image";

import { Product } from "@/products";
import { Modal } from ".";

interface Props {
	product: Product;
}

const getFormatPrice = (price: number, currencyId: string) => {
	return Number(price).toLocaleString('en-AR', {
		style: 'currency',
		currency: currencyId,
	})
}

export const ProductCard = ({ product }: Props) => {
	const [open, setOpen] = useState(false);
	const [modalId, setModalId] = useState('');

	return (
		<article
			className="w-full bg-white border border-gray-200 rounded-lg shadow-lg cursor-pointer hover:scale-105 relative pb-[70px] px-5"
			onClick={() => setOpen(true)}
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
			{/* <div className="flex flex-col justify-between px-5 pb-3"> */}
				<h5 className="font-semibold tracking-tight text-gray-900 mb-2">
					{product.title}
				</h5>
				<div className="flex flex-col items-start absolute left-5 bottom-3">
					{product.original_price && product.price !== product.original_price ? (
						<p className="line-through text-gray-600">
							{getFormatPrice(product.original_price ?? 0, product.currency_id)}
						</p>
					) : null}
					<p className="text-2xl font-bold text-gray-900">
					{getFormatPrice(product.price, product.currency_id)}
					</p>
				</div>
			{/* </div> */}

			<Modal
				product={product}
				open={open}
				onClose={() => setOpen(false)}
			/>
		</article>
	);
};
