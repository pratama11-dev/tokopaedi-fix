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