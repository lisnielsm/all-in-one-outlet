'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Dancing_Script } from 'next/font/google';

const dancingScript = Dancing_Script({
  weight: '600',
  subsets: ['latin'],
  display: 'swap',
});

import { SearchInput } from '..';

export const Drawer = () => {
  useEffect(() => {
    const init = async () => {
      const { Offcanvas, Ripple, initTE } = await import('tw-elements');
      initTE({ Offcanvas, Ripple });
    };
    init();
  }, []);

  return (
    <aside
      className={`
        className="invisible fixed bottom-0 right-0 top-0 z-[1045] flex w-96 max-w-full translate-x-full
        flex-col border-none bg-white bg-clip-padding text-neutral-700 shadow-sm outline-none
        transition duration-300 ease-in-out dark:bg-neutral-800 dark:text-neutral-200 [&[data-te-offcanvas-show]]:transform-none`}
      tabIndex={-1}
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
      data-te-offcanvas-init
    >
      <div className="flex justify-between w-full h-16 bg-[var(--primary-color)] p-4">
        <Link href="/">
          <span className={`${dancingScript.className} text-4xl whitespace-nowrap`}>
            All-in-One
          </span>
        </Link>

        <button
          type="button"
          className="text-slate-800 box-content rounded-none border-none opacity-50 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
          data-te-offcanvas-dismiss
        >
          <span className="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </span>
        </button>
      </div>
      <div className="px-6 py-4">
        <SearchInput />
      </div>
    </aside>
  );
};
