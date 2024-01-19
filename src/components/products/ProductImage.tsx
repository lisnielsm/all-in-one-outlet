import Image from 'next/image';

import { Picture } from '@/products';

interface Props {
  picture: Picture;
  selectedPictureId: string;
  onClick: () => void;
}

export const ProductImage = ({ picture, selectedPictureId, onClick }: Props) => {
  return (
    <div
      className={`
        flex justify-center items-center w-[50px] h-[50px] cursor-pointer border rounded-sm hover:border-[var(--primary-color)]
        ${picture.id === selectedPictureId ? 'border-[var(--primary-color)]' : 'border-gray-300'}
      `}
      onClick={onClick}
    >
      <Image
        src={picture.secure_url}
        alt={picture.id}
        width={48}
        height={48}
        priority
        className="max-w-[48px] max-h-[48px] w-auto h-auto"
      />
    </div>
  );
};
