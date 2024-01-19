import { FilterHeader, Search } from "@/components";
import { ITEMS_PER_PAGE, ProductResponse } from "@/products";

interface Props {
	searchParams: { [key: string]: string };
}

const getProducts = async (params: {
	[key: string]: string;
}): Promise<ProductResponse> => {
	let query = "";
	let i = 0;

	for (const [key, value] of Object.entries(params)) {
		if (i !== 0) {
			query += `&${key}=${value}`;
		} else {
			query += `${key}=${value}`;
		}
		i++;
	}

	if (query.includes("offset") === false) {
		query += "&offset=0";
	}

	if (query.includes("limit") === false) {
		query += `&limit=${ITEMS_PER_PAGE}`;
	}

	console.log('___________', query)

	const url = `https://api.mercadolibre.com/sites/MLU/search?${query}`;
	const response = await fetch(url);
	const data: ProductResponse = await response.json();
	return data;
};

export default async function SearchPage({ searchParams }: Props) {
	const productResponse = await getProducts(searchParams);

	return (
		<section>
			<FilterHeader />

			<div className="px-4">
				<Search productResponse={productResponse} />
			</div>
		</section>
	);
}
