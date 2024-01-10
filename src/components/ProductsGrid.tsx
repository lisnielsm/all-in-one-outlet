"use client";

import { GeneralProduct } from "@/products";
import { Modal, ProductCard } from "./";
import { useEffect } from "react";
import { useAppSelector } from "@/store";

interface Props {
	products: GeneralProduct[];
}

export const ProductsGrid = ({ products }: Props) => {
	const openModal = useAppSelector((state) => state.ui.open);

	useEffect(() => {
    // enable/disable the scroll from the modal backdrop
		if (openModal) {
			document.body.classList.add("overflow-y-hidden");
		} else {
			document.body.classList.remove("overflow-y-hidden");
		}
	}, [openModal]);

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
			{products.map((prod) => (
				<ProductCard key={prod.id} product={prod} />
			))}

			<Modal />
		</div>
	);
};
