import { getFormatPrice } from '@/utils';

interface Props {
	price: number;
	originalPrice: number | null;
	currencyId: string;
}

export const Price = ({ price, originalPrice, currencyId }: Props) => {
	const discount = originalPrice ? Math.floor(100 - (price * 100) / originalPrice) : 0;

	return (
		<>
			{originalPrice && price !== originalPrice ? (
				<p className="text-sm line-through text-red-400">
					{getFormatPrice(originalPrice, currencyId)}
				</p>
			) : null}
			<div className="flex gap-2 flex-nowrap items-center">
				<p className="text-xl font-bold text-gray-900">{getFormatPrice(price, currencyId)}</p>

				{discount ? (
					<div className="text-white bg-green-600 p-1 rounded-md">-{discount}%</div>
				) : null}
			</div>
		</>
	);
};
