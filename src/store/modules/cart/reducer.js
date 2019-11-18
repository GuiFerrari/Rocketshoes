import produce from 'immer';

const INITIAL_STATE = {
  products: [],
};

export default function cart(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@cart/ADD_TO_CART': {
        const productIndex = draft.products.findIndex(
          p => p.id === action.payload.product.id
        );
        if (productIndex >= 0) {
          draft.products[productIndex].amount += 1;
        } else {
          draft.products.push({
            ...action.payload.product,
            amount: 1,
          });
        }
        // draft.products = [
        //   ...state.products,
        //   {
        //     ...action.payload.product,
        //     amount: 1,
        //   },
        // ];
        break;
      }
      default:
    }
  });
}
