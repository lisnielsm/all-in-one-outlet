'use client';

import { useEffect } from 'react';
import Image from 'next/image';

const Slider = () => {
	useEffect(() => {
		const init = async () => {
			const { Carousel, initTE } = await import('tw-elements');
			initTE({ Carousel });
		};
		init();
	}, []);

	return (
		<div
			id="carouselExampleCaptions"
			className="relative"
			data-te-carousel-init
			data-te-ride="carousel"
		>
			{/* Carousel indicators */}
			<div
				className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
				data-te-carousel-indicators
			>
				{[1, 2, 3, 4, 5, 6, 7].map((position) => (
					<button
						key={position}
						type="button"
						data-te-target="#carouselExampleCaptions"
						data-te-slide-to={`${position - 1}`}
						data-te-carousel-active
						className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
						aria-current={position === 1 ? 'true' : 'false'}
						aria-label={`Slide ${position}`}
					></button>
				))}
			</div>

			{/* Carousel items */}
			<div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
				<div
					className="relative float-left -mr-[100%] max-h-[350px] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
					data-te-carousel-active
					data-te-carousel-item
					style={{ backfaceVisibility: 'hidden' }}
				>
					<Image
						src="/banner1.webp"
						className="block w-full"
						alt="Promotion #1"
						width={1200}
						height={350}
						priority
					/>
				</div>

				{[2, 3, 4, 5, 6, 7].map((position) => (
					<div
						key={position}
						className="relative float-left -mr-[100%] max-h-[350px] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
						data-te-carousel-item
						style={{ backfaceVisibility: 'hidden' }}
					>
						<Image
							src={`/banner${position}.webp`}
							className="block w-full"
							alt={`Promotion #${position}`}
							width={1200}
							height={350}
						/>
					</div>
				))}
			</div>

			{/* Carousel controls - prev item */}
			<button
				className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
				type="button"
				data-te-target="#carouselExampleCaptions"
				data-te-slide="prev"
			>
				<span className="inline-block h-8 w-8">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="h-6 w-6"
					>
						<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
					</svg>
				</span>
				<span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
					Previous
				</span>
			</button>

			{/* Carousel controls - next item */}
			<button
				className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
				type="button"
				data-te-target="#carouselExampleCaptions"
				data-te-slide="next"
			>
				<span className="inline-block h-8 w-8">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="h-6 w-6"
					>
						<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
					</svg>
				</span>
				<span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
					Next
				</span>
			</button>
		</div>
	);
};

export default Slider;
