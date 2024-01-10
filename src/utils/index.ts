

export const getFormatPrice = (price: number, currencyId: string) => {
	return Number(price).toLocaleString('en-AR', {
		style: 'currency',
		currency: currencyId,
	})
}