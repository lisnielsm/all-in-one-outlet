import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GeneralProduct } from '../../products/interfaces';

interface UIState {
  open: boolean;
  modalId: string;
  currentProduct: GeneralProduct | null;
}

const initialState: UIState = {
  open: false,
  modalId: '',
  currentProduct: null,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setOpenModal(state, action: PayloadAction<boolean>) {
      state.open = action.payload;
    },
    setModalId(state, action: PayloadAction<string>) {
      state.modalId = action.payload;
    },
  }
});

export const { setModalId, setOpenModal } = uiSlice.actions;

export default uiSlice.reducer;