import Link from 'next/link';

export default function NotFoundPage() {
	return (
		<main className="relative bg-white min-h-[calc(100vh-248px)] sm:min-h-[calc(100vh-168px)] xl:min-h-[calc(100vh-128px)]">
			<div
				className="absolute inset-3 z-20 flex flex-col justify-between items-center bg-center bg-no-repeat bg-contain"
				style={{ backgroundImage: "url('/page-not-found.png')" }}
			>
				<h2 className="text-3xl mt-7 font-bold">Ups!!!<span className='text-2xl font-normal'>&nbsp;we cannot find this page</span></h2>

				<Link
					href="/"
					className="block mb-7 py-4 px-6 font-bold text-center text-white uppercase bg-[var(--primary-color)] rounded-md hover:bg-sky-950">
					Back to Home
				</Link>
			</div>
		</main>
	);
}
