"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { Description, PRODUCT_STATE, Product } from "@/products";
import { useAppDispatch, useAppSelector } from "@/store";
import { setModalId, setOpenModal } from "@/store/ui/uiSlice";
import { getFormatPrice } from "@/utils";
import { ImagesContainer } from ".";

export const Modal = () => {
	const dispatch = useAppDispatch();
	const open = useAppSelector((state) => state.ui.open);
	const modalId = useAppSelector((state) => state.ui.modalId);
	const [description, setDescription] = useState("");
	const [product, setProduct] = useState<Product | null>(null);

	useEffect(() => {
		if (modalId) {
			const fetchProduct = async () => {
				const currentProduct: Product = await fetch(
					`https://api.mercadolibre.com/items/${modalId}`
				).then((res) => res.json());
				console.log("********* product", currentProduct);
				setProduct(currentProduct);
			};

			const fetchDescription = async () => {
				const description: Description = await fetch(
					`https://api.mercadolibre.com/items/${modalId}/description`
				).then((res) => res.json());
				console.log("********* description", description);
				setDescription(description.plain_text);
			};

			fetchProduct();
			fetchDescription();
		}
	}, [modalId]);

	const onClose = () => {
		dispatch(setModalId(""));
		dispatch(setOpenModal(false));
		setDescription("");
		setProduct(null);
	};

	if (!product && !description) return null;

	return (
		// backdrop
		<article
			onClick={onClose}
			className={`
        fixed inset-0 flex justify-center items-center transition-colors z-50
        ${open ? "visible bg-black/50" : "invisible"}
      `}
		>
			{/* modal */}
			<div
				onClick={(e) => e.stopPropagation()}
				className={`
          bg-white rounded-xl shadow p-6 transition-all w-full max-w-[700px]
					max-h-[calc(100vh-40px)] overflow-auto mx-2
          ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
        `}
			>
				{/* Modal header */}
				<div className="flex justify-between items-center mb-1">
					<h2 className="text-2xl">Details</h2>

					<button
						onClick={onClose}
						className="p-1 rounded-lg text-gray-600 bg-white hover:bg-gray-50 hover:text-gray-800"
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
								d="M6 18 18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>

				<hr />

				{/* Modal body */}
				{product ? (
					<>
						<div className="flex flex-col sm:flex-row justify-center sm:justify-between items-start gap-4 my-4">
							<div className="flex flex-col justify-center items-center sm:justify-start sm:items-start">
								<h3 className="text-xl mb-3 sm:max-w-[350px]">
									{product.title}
								</h3>

								<ImagesContainer product={product} />
							</div>

							<div className="flex flex-col items-start justify-start">
								<p className="text-xs text-gray-400 mb-2">{PRODUCT_STATE[product.condition as keyof typeof PRODUCT_STATE]}</p>
								
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
									{getFormatPrice(
										product.price,
										product.currency_id
									)}
								</p>

								<button className="block w-full py-4 font-bold text-center text-white uppercase bg-[var(--primary-color)] rounded-md hover:bg-sky-950 mt-7">
									Add to Cart
								</button>
							</div>
						</div>

						<h4 className="text-xl mb-2">Description</h4>

						<hr />

						<p className="mt-4 w-full">{description}</p>
					</>
				) : null}
			</div>
		</article>
	);
};
