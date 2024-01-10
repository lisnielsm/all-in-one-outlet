import { ProductsGrid } from "@/components";
import { Pagination } from "@/components/Pagination";
import { ITEMS_PER_PAGE, ProductResponse } from "@/products";

interface Props {
	searchParams: { [key: string]: string };
}

const getProducts = async (
	query: string,
	offset = "0",
): Promise<ProductResponse> => {
	const url = `https://api.mercadolibre.com/sites/MLU/search?q=${query}&offset=${offset}&limit=${ITEMS_PER_PAGE}`;
	const response = await fetch(url);
	const data: ProductResponse = await response.json();
	return data;
};

export default async function SearchPage({ searchParams }: Props) {
	const productResponse = await getProducts(
		searchParams["q"],
		searchParams["offset"]
	);
	return (
		<section>
			<h1 className="text-3xl font-bold mb-8">{searchParams["q"]}</h1>

      <ProductsGrid products={productResponse.results} />

			<Pagination totalCount={productResponse.paging.total} />
		</section>
	);
}
