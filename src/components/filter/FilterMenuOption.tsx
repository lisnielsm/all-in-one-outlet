'use client';

import { useState } from 'react';

import { AvailableFilter } from '@/products';
import { FilterMenuOptionItem } from './FilterMenuOptionItem';

interface Props {
  filter: AvailableFilter;
}

const renderOptions = (
  filter: AvailableFilter,
  isOpen: boolean,
  setIsOpen: (arg: boolean) => void,
) => {
  if (filter.values.length <= 10) {
    return filter.values.map((value) => (
      <FilterMenuOptionItem key={value.id} filterValue={value} parentId={filter.id} />
    ));
  } else if (isOpen) {
    return (
      <div>
        {filter.values.map((value) => (
          <FilterMenuOptionItem key={value.id} filterValue={value} parentId={filter.id} />
        ))}
        <span
          className="text-sm text-[var(--primary-color)] cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          Show less
        </span>
      </div>
    );
  } else {
    return (
      <div>
        {filter.values.slice(0, 10).map((value) => (
          <FilterMenuOptionItem key={value.id} filterValue={value} parentId={filter.id} />
        ))}
        <span
          className="text-sm text-[var(--primary-color)] cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          Show more
        </span>
      </div>
    );
  }
};

export const FilterMenuOption = ({ filter }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article>
      <h3 className="text-md font-semibold mb-1">{filter.name}</h3>
      {renderOptions(filter, isOpen, setIsOpen)}
    </article>
  );
};
