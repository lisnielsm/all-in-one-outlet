import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components";
import { Providers } from "@/store/Providers";

export const metadata: Metadata = {
	title: "All-in-One Outlet",
	description: "Best e-commerce in the world",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="min-h-screen bg-white">
				<Header />

				<main className="max-w-[1200px] mx-auto w-full px-4 pb-8 pt-24">
					<Providers>{children}</Providers>
				</main>

			</body>
		</html>
	);
}
