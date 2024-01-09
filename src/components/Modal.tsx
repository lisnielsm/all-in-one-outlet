import { Product } from "@/products";

interface Props {
  product: Product;
	open: boolean;
	onClose: () => void;
}

export const Modal = ({ product, open, onClose }: Props) => {
	return (
		// backdrop
		<article
			onClick={onClose}
			className={`
        fixed inset-0 flex justify-center items-center transition-colors
        ${open ? "visible bg-black/20" : "invisible"}
      `}
		>
			{/* modal */}
			<div
				onClick={(e) => e.stopPropagation()}
				className={`
          bg-white rounded-xl shadow p-6 transition-all
          ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
        `}
			>
				{/* Modal header */}
        <div className="flex justify-between">
          <h2 className="text-2xl">Details</h2>
          
          <button
            onClick={onClose}
            className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Modal body */}
        

			</div>
		</article>
	);
};
