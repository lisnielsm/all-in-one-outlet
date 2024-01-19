'use client';

import { useEffect } from 'react';
import Image from 'next/image';

import { GeneralProduct } from '@/products';
import { useAppDispatch } from '@/store';
import { setModalId, setOpenModal } from '@/store/ui/uiSlice';
import { Price } from '..';

interface Props {
  product: GeneralProduct;
}

export const ProductCard = ({ product }: Props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const init = async () => {
      const { Tooltip, initTE } = await import('tw-elements');
      initTE({ Tooltip });
    };
    init();
  }, []);

  const isOpenModal = () => {
    dispatch(setModalId(product.id));
    dispatch(setOpenModal(true));
  };

  return (
    <section
      className="w-full bg-white border border-gray-200 rounded-lg shadow-lg cursor-pointer hover:scale-105 relative pb-[70px] px-5"
      onClick={isOpenModal}
    >
      <div className="flex items-center justify-center">
        <Image
          className="p-4"
          src={`https://http2.mlstatic.com/D_NQ_NP_932002-${product.thumbnail_id}-V.webp`}
          alt={product.title}
          width={200}
          height={200}
          priority
        />
      </div>
      <h2
        className="text-gray-700 mb-2 text-ellipsis line-clamp-3"
        data-te-toggle="tooltip"
        title={product.title}
      >
        {product.title}
      </h2>
      <div className="flex flex-col items-start absolute left-5 bottom-3">
        <Price
          price={product.price}
          originalPrice={product.original_price}
          currencyId={product.currency_id}
        />
      </div>
    </section>
  );
};
