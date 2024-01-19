import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductResponse } from '../../products';
interface UIState {
  isOpenModal: boolean;
  modalId: string;
  productList: ProductResponse | null;
}

const initialState: UIState = {
  isOpenModal: false,
  modalId: '',
  productList: null,
}

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
  }
});

export const { setModalId, setOpenModal, setProductList } = uiSlice.actions;

export default uiSlice.reducer;