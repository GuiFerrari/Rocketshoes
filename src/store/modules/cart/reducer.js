import produce from 'immer';

const INITIAL_STATE = {
  products: [],
};

export default function cart(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@cart/ADD_TO_CART': {
        draft.products = [...state.products, action.payload.product];
        break;
      }
      default:
    }
  });
}
