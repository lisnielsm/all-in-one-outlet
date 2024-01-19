"use client";

import { Modal, ProductCard } from "..";
import { useAppSelector } from "@/store";

export const ProductsGrid = () => {
	const products =
		useAppSelector((state) => state.ui.productList?.results) || [];
	return (
		<article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-2">
			{products.map((prod) => (
				<ProductCard key={prod.id} product={prod} />
			))}

			<Modal />
		</article>
	);
};
