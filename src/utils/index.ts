export const getFormatPrice = (price: number, currencyId: string) => {
  return Number(price).toLocaleString('en-UR', {
    style: 'currency',
    currency: currencyId,
  });
};
