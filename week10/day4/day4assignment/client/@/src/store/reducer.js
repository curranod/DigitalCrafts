const initialState = {
    cart: [],
    isAuthenticated: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'BOOKS':
        return {
          ...state,
          cart: state.cart.concat(action.payload)
        };
      case 'ON_LOGIN':
        return {
          ...state,
          isAuthenticated: action.payload != null
        }
      default:
        return state;
    }
};

export default reducer;