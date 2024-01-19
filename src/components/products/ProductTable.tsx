import { Product } from "@/products";

interface Props {
	currentProduct: Product;
}

export const ProductTable = ({ currentProduct }: Props) => {
	return (
		<div className="mb-3">
			<h4 className="text-xl mb-2">Main features</h4>
			<hr />

			<div className="flex flex-col mt-2">
				<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
						<div className="overflow-hidden">
							<table className="min-w-full text-left text-sm font-light">
								<tbody className="border border-neutral-100">
									{currentProduct.attributes.map(
										(attr, index) => (
											<tr
												key={attr.id}
												className={`border-b ${
													index % 2 === 0
														? "bg-neutral-100"
														: "bg-white"
												}`}
											>
												<td className="px-6 py-4">
													{attr.name}
												</td>
												<td className="px-6 py-4">
													{attr.value_name?.replaceAll(",", ", ")}
												</td>
											</tr>
										)
									)}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
