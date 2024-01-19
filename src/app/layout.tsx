import type { Metadata } from 'next';
import './globals.css';
import { Header, Drawer, FilterDrawer, Footer } from '@/components';
import { Providers } from '@/store/Providers';

export const metadata: Metadata = {
  title: 'All-in-One',
  description: 'Best e-commerce in the world',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        <main className="w-full pt-16">
          <Providers>
            <Header />

            <Drawer />

            <FilterDrawer />

            {children}

            <Footer />
          </Providers>
        </main>
      </body>
    </html>
  );
}
