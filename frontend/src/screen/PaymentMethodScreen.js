import React from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

function PaymentMethodScreen(props) {
    const orderId = props.match.params.id;
    const orderDetails = useSelector((state) => state.orderDetails);
    const { order } = orderDetails;

    const { loading, error } = PaymentMethodScreen;
    let history = useHistory();


    return loading ? <div>Loading...</div> :
    error ? <div>{error}</div> : 
    <>
        <div className="tittle">
              <h1>How to Pay it?</h1>
        </div>

        <div className="card card-body">
        <div className="col-2">
            <ul>
              <li>
                <div className="card card-body">
                  <img src="../img/logo/gopay.jpg" width="15%"/>
                  <li>1. Insert your PIN.</li>
                  <li>2. Select TRANSFER and click Virtual Account.</li>
                  <li>3. Enter TOKOPAEDI company code: 70001 and your Order Id <b>"{order._id}"</b>.</li>          
                  <li>4. Enter top up amount.</li>          
                  <li>5. Follow the next instructions to complete transaction.</li>
                </div>
              </li>
              <li>
                <div className="card card-body">
                <img src="../img/logo/dana.png" width="12%" />
                  <li>1. Insert your PIN.</li>
                  <li>2. Select TRANSFER and click Virtual Account.</li>
                  <li>3. Enter TOKOPAEDI company code: 70001 and your Order Id <b>"{order._id}"</b>.</li>          
                  <li>4. Enter top up amount.</li>          
                  <li>5. Follow the next instructions to complete transaction.</li>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="container">
            <button className="btn" onClick={() => history.goBack()}>To Order Screen →</button>
        </div>
    </>    
}

export default PaymentMethodScreen