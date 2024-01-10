"use client";

import { useState } from "react";

import Image from "next/image";

import { Picture, Product } from "@/products";

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
					? pictures.slice(0, 5).map((picture) => (
							<div
								key={picture.id}
								className={`
                  flex justify-center items-center w-[50px] h-[50px] cursor-pointer border rounded-sm hover:border-[var(--primary-color)]
                  ${picture.id === selectedPicture.id ? "border-[var(--primary-color)]" : "border-gray-300"}
                `}
								onClick={() => handleClick(picture)}
							>
								<Image
									src={picture.secure_url}
									alt={picture.id}
									width={48}
									height={48}
									priority
                  className="max-w-[48px] max-h-[48px] w-auto h-auto"
								/>
							</div>
					  ))
					: pictures.map((picture) => (
							<Image
								key={picture.id}
								src={picture.secure_url}
								alt={picture.id}
								width={20}
								height={20}
								priority
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
