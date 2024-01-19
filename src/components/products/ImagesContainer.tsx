"use client";

import { useState } from "react";

import Image from "next/image";

import { Picture, Product } from "@/products";
import { ProductImage } from "./ProductImage";

interface Props {
	product: Product;
}

export const ImagesContainer = ({ product }: Props) => {
	const { pictures } = product;
	const [selectedPicture, setSelectedPicture] = useState<Picture>(
		pictures[0]
	);

	const handleClick = (newPicture: Picture) => {
		setSelectedPicture(newPicture);
	};

	return (
		<div className="flex my-2 gap-4">
			<div className="flex flex-col gap-2">
				{pictures.length >= 5
					? pictures
							.slice(0, 5)
							.map((picture) => (
								<ProductImage
									key={picture.id}
									picture={picture}
									selectedPictureId={selectedPicture.id}
									onClick={() => handleClick(picture)}
								/>
							))
					: pictures.map((picture) => (
							<ProductImage
								key={picture.id}
								picture={picture}
								selectedPictureId={selectedPicture.id}
								onClick={() => handleClick(picture)}
							/>
					))}
			</div>

			<div className="flex justify-center items-center w-[282px] h-[282px]">
				<Image
					src={selectedPicture.secure_url}
					alt={selectedPicture.id}
					width={282}
					height={282}
					priority
					className="max-w-[280px] max-h-[280px] w-auto h-auto"
				/>
			</div>
		</div>
	);
};
