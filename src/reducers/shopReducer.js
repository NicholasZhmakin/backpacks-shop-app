import { shopProducts, detailProduct } from "../data";

const initState = {
  products: [],
  selectedProducts: [],
  detailProduct: detailProduct,
  cart: [],
  modalOpen: false,
  modalProduct: detailProduct,
  cartSubTotal: 0,
  cartTax: 0,
  cartTotal: 0
};

const shopReducer = (state = initState, action) => {
  if (action.type === "SET_PRODUCTS" || state.products.length === 0) {
    let tempProducts = [];
    shopProducts.forEach(item => {
      const singleItem = {
        ...item
      };
      tempProducts = [...tempProducts, singleItem];
    });
    return {
      ...state,
      products: tempProducts,
      selectedProducts: tempProducts
    };
  }

  // Details action
  if (action.type === "SHOW_DETAILS") {
    const product = state.products.find(item => item.id === action.id);
    return {
      ...state,
      detailProduct: product
    };
  }

  // Modal actions
  if (action.type === "OPEN_MODAL") {
    const product = state.products.find(item => item.id === action.id);
    return {
      ...state,
      modalProduct: product,
      modalOpen: true
    };
  }

  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      modalOpen: false
    };
  }

  // Cart actions
  if (action.type === "ADD_TOCART") {
    const tempProducts = [...state.products];
    const productIndex = tempProducts.findIndex(item => item.id === action.id);
    const product = tempProducts[productIndex];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    tempProducts[productIndex] = product;
    return {
      ...state,
      products: tempProducts,
      cart: [...state.cart, product]
    };
  }

  if (action.type === "ADD_TOTALS") {
    let subTotal = 0;
    state.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    return {
      ...state,
      cartSubTotal: subTotal,
      cartTax: tax,
      cartTotal: total
    };
  }

  if (action.type === "INCREMENT_VALUE") {
    const tempCart = [...state.cart];
    const productIndex = tempCart.findIndex(item => item.id === action.id);
    const product = state.cart[productIndex];
    product.count += 1;
    product.total = product.count * product.price;
    return {
      ...state,
      cart: tempCart
    };
  }

  if (action.type === "DECREMENT_VALUE") {
    const tempCart = [...state.cart];
    const productIndex = tempCart.findIndex(item => item.id === action.id);
    const product = tempCart[productIndex];
    product.count -= 1;
    product.total = product.count * product.price;
    return {
      ...state,
      cart: tempCart
    };
  }

  if (action.type === "REMOVE_ITEM") {
    let tempProducts = [...state.products];
    let tempCart = [...state.cart];
    tempCart = tempCart.filter(item => item.id !== action.id);
    const productIndex = tempProducts.findIndex(item => item.id === action.id);
    const removedProduct = tempProducts[productIndex];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    return {
      ...state,
      cart: tempCart,
      product: tempProducts
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: []
    };
  }

  // Select category actions
  if (action.type === "SELECT_ALL") {
    let tempProducts = [...state.products];
    return {
      ...state,
      selectedProducts: tempProducts
    };
  }

  if (action.type === "SELECT_CASUAL") {
    let tempProducts = [...state.products];
    tempProducts = tempProducts.filter(item => item.category === "casual");
    return {
      ...state,
      selectedProducts: tempProducts
    };
  }

  if (action.type === "SELECT_LAPTOP") {
    let tempProducts = [...state.products];
    tempProducts = tempProducts.filter(item => item.category === "laptop");
    return {
      ...state,
      selectedProducts: tempProducts
    };
  }

  if (action.type === "SELECT_HIKING") {
    let tempProducts = [...state.products];
    tempProducts = tempProducts.filter(item => item.category === "hiking");
    return {
      ...state,
      selectedProducts: tempProducts
    };
  }

  return {
    ...state
  };
};

export default shopReducer;
