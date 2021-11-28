import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { createOrder } from '../actions/orderAction';
import { ORDER_CREATE_RESET } from '../constants/orderConstant';
import CheckoutStep from '../components/CheckoutStep.js';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';


function PlaceOrderScreen(props){

  const cart = useSelector(state => state.cart);
  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, success, error, order } = orderCreate;
  
  const { cartItems, shipping, payment, fullName} = cart;
  if(!shipping){
      props.history.push("/shipping");
  } else if(!payment){
      props.history.push("/payment");
  }


  const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12
  const itemsPrice = toPrice(cartItems.reduce((a, c) => a + c.price * c.qty, 0));
  const shippingPrice = itemsPrice > 1000000 ? toPrice(0) : toPrice(15000);
  const taxPrice = toPrice (0.1 * itemsPrice);
  const totalPrice = itemsPrice + shippingPrice + taxPrice;


  const dispatch = useDispatch();
  
  const placeOrderHandler = () => {
    dispatch(createOrder({ orderItems: cartItems, shipping, payment, itemsPrice, shippingPrice,
        taxPrice, totalPrice, fullName }));
  }

  useEffect(() => {
    if (success) {
      props.history.push(`/order/${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
      }
    }, [dispatch, order, props.history, success]);

  return <div>
    <CheckoutStep step1 step2 step3 step4></CheckoutStep>
    <div className="subheader py-2 py-lg-6 subheader-solid" id="kt_subheader">
      <div className="container-fluid d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
        <div className="d-flex align-items-center flex-wrap mr-1">
          <div className="d-flex align-items-baseline flex-wrap mr-5">
            <h5 className="text-dark font-weight-bold my-1 mr-5">All Product</h5>
            {/* <ul className="breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold p-0 my-2 font-size-sm">
              <li className="breadcrumb-item text-muted"><a className="text-muted" href="">Overall Ship</a></li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex flex-column-fluid">
      <div class="container">
        <div class="card card-custom overflow-hidden">
          <div class="card-body p-0">
            <div class="row justify-content-center bgi-size-cover bgi-no-repeat py-8 px-8 py-md-27 px-md-0" style="background-image: url(/metronic/theme/html/demo1/dist/assets/media/bg/bg-6.jpg);">
              <div class="col-md-9">
                <div class="d-flex justify-content-between pb-10 pb-md-20 flex-column flex-md-row">
                  <h1 class="display-4 text-white font-weight-boldest mb-10">INVOICE</h1>
                  <div class="d-flex flex-column align-items-md-end px-0">
                    <a href="#" class="mb-5">
                      <img src="/metronic/theme/html/demo1/dist/assets/media/logos/logo-light.png" alt="" />
                    </a>
                    <span class="text-white d-flex flex-column align-items-md-end opacity-70">
                      <span>Cecilia Chapman, 711-2880 Nulla St, Mankato</span>
                      <span>Mississippi 96522</span>
                    </span>
                  </div>
                </div>
                <div class="border-bottom w-100 opacity-20"></div>
                <div class="d-flex justify-content-between text-white pt-6">
                  <div class="d-flex flex-column flex-root">
                    <span class="font-weight-bolde mb-2r">DATA</span>
                    <span class="opacity-70">Dec 12, 2017</span>
                  </div>
                  <div class="d-flex flex-column flex-root">
                    <span class="font-weight-bolder mb-2">INVOICE NO.</span>
                    <span class="opacity-70">GS 000014</span>
                  </div>
                  <div class="d-flex flex-column flex-root">
                    <span class="font-weight-bolder mb-2">INVOICE TO.</span>
                    <span class="opacity-70">Iris Watson, P.O. Box 283 8562 Fusce RD. Fredrick Nebraska 20620</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-center py-8 px-8 py-md-10 px-md-0">
              <div class="col-md-9">
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th class="pl-0 font-weight-bold text-muted text-uppercase">Description</th>
                        <th class="text-right font-weight-bold text-muted text-uppercase">Hours</th>
                        <th class="text-right font-weight-bold text-muted text-uppercase">Rate</th>
                        <th class="text-right pr-0 font-weight-bold text-muted text-uppercase">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="font-weight-boldest font-size-lg">
                        <td class="pl-0 pt-7">Creative Design</td>
                        <td class="text-right pt-7">80</td>
                        <td class="text-right pt-7">$40.00</td>
                        <td class="text-danger pr-0 pt-7 text-right">$3200.00</td>
                      </tr>
                      <tr class="font-weight-boldest border-bottom-0 font-size-lg">
                        <td class="border-top-0 pl-0 py-4">Front-End Development</td>
                        <td class="border-top-0 text-right py-4">120</td>
                        <td class="border-top-0 text-right py-4">$40.00</td>
                        <td class="text-danger border-top-0 pr-0 py-4 text-right">$4800.00</td>
                      </tr>
                      <tr class="font-weight-boldest border-bottom-0 font-size-lg">
                        <td class="border-top-0 pl-0 py-4">Back-End Development</td>
                        <td class="border-top-0 text-right py-4">210</td>
                        <td class="border-top-0 text-right py-4">$60.00</td>
                        <td class="text-danger border-top-0 pr-0 py-4 text-right">$12600.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="row justify-content-center bg-gray-100 py-8 px-8 py-md-10 px-md-0">
              <div class="col-md-9">
                <div class="d-flex justify-content-between flex-column flex-md-row font-size-lg">
                  <div class="d-flex flex-column mb-10 mb-md-0">
                    <div class="font-weight-bolder font-size-lg mb-3">BANK TRANSFER</div>
                    <div class="d-flex justify-content-between mb-3">
                      <span class="mr-15 font-weight-bold">Account Name:</span>
                      <span class="text-right">Barclays UK</span>
                    </div>
                    <div class="d-flex justify-content-between mb-3">
                      <span class="mr-15 font-weight-bold">Account Number:</span>
                      <span class="text-right">1234567890934</span>
                    </div>
                    <div class="d-flex justify-content-between">
                      <span class="mr-15 font-weight-bold">Code:</span>
                      <span class="text-right">BARC0032UK</span>
                    </div>
                  </div>
                  <div class="d-flex flex-column text-md-right">
                    <span class="font-size-lg font-weight-bolder mb-1">TOTAL AMOUNT</span>
                    <span class="font-size-h2 font-weight-boldest text-danger mb-1">$20.600.00</span>
                    <span>Taxes Included</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-center py-8 px-8 py-md-10 px-md-0">
              <div class="col-md-9">
                <div class="d-flex justify-content-between">
                  <button type="button" class="btn btn-light-primary font-weight-bold" onclick="window.print();">Download Invoice</button>
                  <button type="button" class="btn btn-primary font-weight-bold" onclick="window.print();">Print Invoice</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className="placeorder">
      <div className="placeorder-info">
        <div>
          <h3>Shipping to</h3>
          <div>
            {cart.shipping.fullName} <br />
            {cart.shipping.address}, {cart.shipping.city},
            {cart.shipping.postCode}, {cart.shipping.country}
          </div>
        </div>
        <div>
          <h3>Payment</h3>
          <div>
            Payment Method: {cart.payment.paymentMethod}
          </div>
        </div>
        <div>
          <ul className="cart-list-container">
            <li>
              <h3>
                  Shopping Cart
              </h3>
              <div className="cart-list-container-price">
                  Price
              </div>
            </li>
            {cartItems.length === 0 ?
              <div>
                Cart is Empty
              </div>
              : 
              cartItems.map( item =>
                <li  key={item.product}>
                    <div className="cart-image">
                        <img src={item.img} alt="product" />
                    </div>
                    <div className="cart-name">
                        <div>
                            <Link to={"/product/" + item.product}>
                                {item.name}
                            </Link>
                        </div>
                        <div>
                            Qty: {item.qty}
                        </div>
                    </div>
                    <div className="cart-price">
                        <b>Rp. {item.price},-</b>
                    </div>
                </li>
              )
            }
          </ul>
        </div>
      </div>
      <div className="placeorder-action">
        <ul>
            <li>
                <h3>Order Summary</h3>
            </li>
            <li>
                <div>Items</div>
                <div>Rp.{itemsPrice}</div>
            </li>
            <li>
                <div>Shipping</div>
                <div>Rp.{shippingPrice}</div>
            </li>
            <li>
                <div>Tax</div>
                <div>Rp.{taxPrice}</div>
            </li>
            <hr />
            <li>
                <strong>Order Total</strong>
                <strong>Rp.{totalPrice}</strong>
            </li>
            <li>
                <button className="button" onClick={placeOrderHandler} 
                disabled={cart.cartItems.length === 0}>Place Order</button>
            </li>
            {loading && <LoadingBox></LoadingBox>}
            {error && <MessageBox variant="danger">{error}</MessageBox>}
        </ul>                    
      </div>
    </div>
    <div type="button" className="button">
      <Link to="/cart">Back to Cart</Link>
    </div>
  </div>
    

}


export default PlaceOrderScreen;