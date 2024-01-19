import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Alert, Product, ProductResponse } from '../../products';
interface UIState {
  isOpenModal: boolean;
  modalId: string;
  productList: ProductResponse | null;
  toast: Alert;
  cartProducts: Product[];
}

const initialState: UIState = {
  isOpenModal: false,
  modalId: '',
  productList: null,
  toast: {
    isShow: false,
    isError: false,
    message: '',
  },
  cartProducts: [],
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setOpenModal(state, action: PayloadAction<boolean>) {
      state.isOpenModal = action.payload;
    },
    setModalId(state, action: PayloadAction<string>) {
      state.modalId = action.payload;
    },
    setProductList(state, action: PayloadAction<ProductResponse | null>) {
      state.productList = action.payload;
    },
    setToast(state, action: PayloadAction<Alert>) {
      state.toast = action.payload;
    },
    addProductToCart(state, action: PayloadAction<Product>) {
      state.cartProducts = [...state.cartProducts, action.payload];
    },
  },
});

export const { setModalId, setOpenModal, setProductList, setToast, addProductToCart } =
  uiSlice.actions;

export default uiSlice.reducer;
