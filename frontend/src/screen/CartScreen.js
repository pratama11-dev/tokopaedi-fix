import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';

function CartScreen(props){
  const cart = useSelector(state => state.cart);

  const { cartItems } = cart;

  const productId = props.match.params.id;
  const qty = props.location.search? Number(props.location.search.split("=")[1]):1;
  const dispatch = useDispatch();
  const removeFromCartHandler = (productId) => {
      dispatch(removeFromCart(productId))
  }
  useEffect(() => {
      if(productId){
          dispatch(addToCart(productId, qty));
      }
  }, [dispatch, productId, qty]);

  const checkoutHandler = () =>{
    props.history.push("/signin?redirect=shipping")
  }


  return <div className="cart">
    <div class="flex-row-fluid ml-lg-8">
      <div class="card card-custom gutter-b">
        <div class="card-header flex-wrap border-0 pt-6 pb-0">
          <h3 class="card-title align-items-start flex-column">
            <span class="card-label font-weight-bolder font-size-h3 text-dark">My Shopping Cart</span>
          </h3>
          <div class="card-toolbar">
            <div class="dropdown dropdown-inline">
              <a href="/Allscreen" class="btn btn-primary font-weight-bolder font-size-sm">Continue Shopping</a>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th class="text-center">Qty</th>
                  <th class="text-right">Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
              {cartItems.length === 0 ?
                <div>
                  <h6 class="font-weight-bolder text-dark font-size-h6 m-2">Cart is Empty</h6>
                </div>
                : 
                  cartItems.map( item =>
                    <tr  key={item.product}>
                      <td class="d-flex align-items-center font-weight-bolder">
                        <div class="symbol symbol-60 flex-shrink-0 mr-4 bg-light">
                          <img class="symbol-label" src={item.img} alt="product" />
                        </div>
                        <a href={"/product/" + item.product} class="text-dark text-hover-primary">{item.name}</a>
                      </td>
                      <td class="text-center align-middle">
                        <span class="mr-2 font-weight-bolder">{item.qty}</span>
                      </td>
                      <td class="text-right align-middle font-weight-bolder font-size-h5">Rp. {item.price},-</td>
                      <td class="text-right align-middle">
                        <button type="button" class="btn btn-danger font-weight-bolder font-size-sm" onClick={() =>removeFromCartHandler(item.product)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  )
                }
                <tr>
                  <td colspan="2"></td>
                  <td class="font-weight-bolder font-size-h4 text-right"></td>
                  <td class="font-weight-bolder font-size-h4 text-right">
                    <h6>
                      Subtotal ( {cartItems.reduce((a, c) => a + c.qty, 0)} items)
                      :
                      Rp. {cartItems.reduce((a,c) => a + c.price * c.qty, 0)},-
                    </h6>
                  </td>
                </tr>
                <tr>
                  <td colspan="4" class="border-0 text-muted text-right pt-0">Excludes Delivery. GST Included</td>
                </tr>
                <tr>
                  <td colspan="4" class="border-0 text-muted text-right pt-0">
                    <button onClick={checkoutHandler} className="btn btn-primary font-weight-bolder font-size-sm" disabled={cartItems.length === 0}>
                      Proceed to CheckOut
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
}


export default CartScreen;