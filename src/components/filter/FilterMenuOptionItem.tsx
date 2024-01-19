'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AvailableFilterValue } from "@/products"

interface Props {
  filterValue: AvailableFilterValue;
  parentId: string;
}

export const FilterMenuOptionItem = ({ filterValue, parentId } : Props) => {
  const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

  const handleClick = () => {
    const url = new URLSearchParams(Array.from(searchParams.entries()));
    url.delete(parentId);
    url.set(parentId, filterValue.id);
    const search = url.toString();
		const query = search ? `?${search}` : "";

		router.push(`${pathname}${query}`);
  }

  return (
    <section
      className="flex gap-1 mb-1 text-sm cursor-pointer hover:text-[var(--primary-color)] active:text-[var(--primary-color)]"
      onClick={handleClick}  
    >
      <h4>{filterValue.name}</h4>
      <span className="text-gray-400">{`(${filterValue.results})`}</span>
    </section>
  )
}
