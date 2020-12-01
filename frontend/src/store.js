import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import { cartReducer} from './reducers/cartReducers';
import {
  orderCreateReducer,
  orderDeleteReducer,
  orderDeliverReducer,
  orderDetailsReducer,
  orderListReducer,
  orderMineListReducer,
  orderPayReducer,
} from './reducers/orderReducers';
import {
  productCategoryListReducer,
  productCreateReducer,
  productDeleteReducer,
  productDetailsReducer,
  productListReducer,
  productSaveReducer,
  productUpdateReducer,
} from './reducers/productReducers';
import { createStore, 
  combineReducers, 
  applyMiddleware, 
  compose} 
  from 'redux';
import { 
  userRegisterReducer, 
  userSigninReducer,
  userDeleteReducer,
  userDetailsReducer,
  userListReducer,
  userTopSellerListReducer,
  userUpdateProfileReducer,
  userUpdateReducer, } 
  from './reducers/userReducers';


const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo  = Cookie.getJSON("userInfo") || null;

const initialState = { cart: { cartItems }, userSignin: {userInfo} };
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderMineList: orderMineListReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userUpdate: userUpdateReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  orderList: orderListReducer,
  orderDelete: orderDeleteReducer,
  orderDeliver: orderDeliverReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userTopSellersList: userTopSellerListReducer,
  productCategoryList: productCategoryListReducer,
  productSave: productSaveReducer,
  productDelete: productDeleteReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;