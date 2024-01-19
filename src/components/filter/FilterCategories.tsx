'use client';

import { Filter } from '@/products';
import { useAppSelector } from '@/store';
import { FilterCategoriesItem } from './FilterCategoriesItem';

export const FilterCategories = () => {
  const currentFilters: Filter[] = useAppSelector((state) => state.ui.productList?.filters) || [];
  return (
    <div className="flex gap-2 flex-wrap">
      {currentFilters.map((filter) => (
        <FilterCategoriesItem key={filter.id} filterValue={filter.values[0]} parentId={filter.id} />
      ))}
    </div>
  );
};
