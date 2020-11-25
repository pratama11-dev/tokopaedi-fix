import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { savePayment } from '../actions/cartActions';
import CheckoutStep from '../components/CheckoutStep.js';



function PaymentScreen(props) {

    const [paymentMethod, setPaymentMethod] = useState('');

    const dispatch = useDispatch();
    
    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(savePayment({paymentMethod}));
        props.history.push('placeorder')
    }
    return <div>
        <CheckoutStep step1 step2 step3></CheckoutStep>
        <div className="form">
            <form onSubmit={submitHandler}>
                <ul className="form-container">
                    <li>
                        <h2>Payment</h2>
                    </li>
                    <li>
                        <div>
                            <input type="radio" name="paymentMethod" id="paymentMethod" value="GoPay"
                            onChange={(e) => setPaymentMethod(e.target.value)}>
                            </input>
                            <label htmlFor="paymentMethod">
                                <img src="../img/logo/gopay.jpg" width="40%" alt></img>
                            </label>
                        </div>
                        <div>
                            <input type="radio" name="paymentMethod" id="paymentMethod" value="Dana"
                            onChange={(e) => setPaymentMethod(e.target.value)}>
                            </input>
                            <label htmlFor="paymentMethod">
                                <img src="../img/logo/dana.png" width="40%" alt></img>
                            </label>
                        </div>
                    </li>
                    
                    <li>
                        <button type="submit" className="button">Continue</button>
                    </li>
                </ul>
            </form>
        </div>
    </div>
}

export default PaymentScreen;