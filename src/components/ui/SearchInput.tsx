'use client';

import React from 'react';

import { FormEventHandler } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface SearchForm extends HTMLFormElement {
  search: HTMLInputElement;
}

export const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit: FormEventHandler<SearchForm> = (e) => {
    e.preventDefault(); // stop refresh
    const { search } = e.currentTarget;
    const newUrlParams = new URLSearchParams();
    newUrlParams.set('q', search.value);
    newUrlParams.set('offset', '0');
    router.push(`/search?${newUrlParams}`);
  };

  return (
    <form className="max-w-[900px] relative w-full mx-auto" onSubmit={handleSubmit}>
      <input
        className="w-full py-2 pl-4 pr-16 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        name="search"
        type="search"
        placeholder="Search"
        defaultValue={searchParams.get('q') || ''}
      />
      <button
        className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-700 border-l border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        data-te-offcanvas-dismiss
      >
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.795 13.408l5.204 5.204a1 1 0 01-1.414 1.414l-5.204-5.204a7.5 7.5 0 111.414-1.414zM8.5 14A5.5 5.5 0 103 8.5 5.506 5.506 0 008.5 14z"
          />
        </svg>
      </button>
    </form>
  );
};
