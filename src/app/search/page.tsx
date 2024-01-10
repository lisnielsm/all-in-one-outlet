import { ProductsGrid } from "@/components";
import { GeneralProduct, ProductResponse } from "@/products";

interface Props {
	searchParams: { [key: string]: string };
}

const getProducts = async (
	query: string,
	offset = "0",
	limit = "5"
): Promise<GeneralProduct[]> => {
	const url = `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=${limit}&offset=${offset}`;
	const response = await fetch(url);
	const data: ProductResponse = await response.json();
	return data.results;
};

export default async function SearchPage({ searchParams }: Props) {
	console.log("********", searchParams);
	const products = await getProducts(
		searchParams["q"],
		searchParams["offset"],
		searchParams["limit"]
	);
	return (
		<section>
			<h1 className="text-3xl font-bold mb-8">{searchParams["q"]}</h1>

      <ProductsGrid products={products} />
		</section>
	);
}
